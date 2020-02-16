import fs from "fs"
import glob from "glob"
import path from "path"

import rimraf from "rimraf"
import { SingleBar as ProgressBar } from "cli-progress"
import convertFlowToTS from "@khanacademy/flow-to-ts/src/convert"
import detectJSX from "@khanacademy/flow-to-ts/src/detect-jsx"
import jscodeshift from "jscodeshift/src/core"
import { Transform } from "jscodeshift"
import * as ts from "typescript"

import { transformer as importsExportsTransformer } from "./codemods/imports-exports"
import { transformer as noopsTransformer } from "./codemods/noops"
import { transformer as objmapTransformer } from "./codemods/objmap"

const WORKBENCH = "./workbench"
const SOURCE = "./node_modules/react-native"

const SOURCE_GLOB = "{index.js,interface.js,Libraries/**/!(__mocks__|__flowtests__)/*.js}"
const IGNORE_GLOB = "Libraries/Renderer/implementations/*.js"

const JSCODESHIFT = jscodeshift.withParser("tsx")
const DTS_OPTIONS: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    lib: ["ES2015"],
    jsx: ts.JsxEmit.Preserve,
    declaration: true,
    strictNullChecks: true,
    types: ["invariant", "react", "promise", "prop-types"],
    esModuleInterop: true,
}

function codemod(transform: Transform, file: string, source: string) {
    return transform(
        {
            path: file,
            source: source,
        },
        {
            j: JSCODESHIFT,
            jscodeshift: JSCODESHIFT,
            stats: () => {},
            report: (_msg: string) => {},
        },
        {}
    ) as string
}

function generateDTS(tsPaths: string[]) {
  const host = ts.createCompilerHost(DTS_OPTIONS)
  host.writeFile = (fileName, content) => {
    if (fileName.endsWith(".d.ts")) {
        fs.writeFileSync(fileName, content)
    }
  }
  const program = ts.createProgram([...tsPaths, "node_modules/typescript/lib/lib.es6.d.ts"], DTS_OPTIONS, host)
  return program.emit()
}

rimraf(WORKBENCH, err => {
    if (err) throw new Error(err.message)

    let inputPaths = glob.sync(SOURCE_GLOB, { cwd: SOURCE, ignore: IGNORE_GLOB });
    if (process.argv[2]) {
        const filterRegExp = new RegExp(process.argv[2])
        inputPaths = inputPaths.filter(p => filterRegExp.test(p))
    }

    const progressBar = new ProgressBar({
        format: 'Progress |{bar}| {percentage}% || {value}/{total} Files',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true,
        stopOnComplete: true,
        forceRedraw: true,
    })
    progressBar.start(inputPaths.length, 0)

    const errors = new Map<string, [string, string]>()
    const captureError = <T>(inputPath: string, name: string, task: () => T): T => {
        try {
            return task()
        } catch(err) {
            errors.set(inputPath, [name, err.message])
            throw err
        }
    }
    
    const tsPaths = inputPaths.map(inputPath => {
        try {
            const flowCode = captureError(inputPath, "readFileSync", () => fs.readFileSync(path.join(SOURCE, inputPath), "utf-8"))
            const extension = detectJSX(flowCode) ? ".tsx" : ".ts"
            const tsPath = path.join(WORKBENCH, inputPath.replace(/\.js$/, extension))
            
            let tsCode = captureError(inputPath, "convertFlowToTS", () => convertFlowToTS(flowCode))
            tsCode = captureError(inputPath, "importsExportsTransformer", () => codemod(importsExportsTransformer, tsPath, tsCode))
            tsCode = captureError(inputPath, "noopsTransformer", () => codemod(noopsTransformer, tsPath, tsCode))
            tsCode = captureError(inputPath, "objmapTransformer", () => codemod(objmapTransformer, tsPath, tsCode))
            
            captureError(inputPath, "mkdirSync", () => fs.mkdirSync(path.dirname(tsPath), { recursive: true }))
            captureError(inputPath, "writeFileSync", () => fs.writeFileSync(tsPath, tsCode))

            return tsPath
        } catch {
            return null
        } finally {
            progressBar.increment()
        }
    }).filter(Boolean) as string[]

    console.log("Generating dts files...")
    generateDTS(tsPaths).diagnostics.forEach(diagnostic => {
        const message = typeof diagnostic.messageText === "string" ? diagnostic.messageText : ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n", 2)
        const loc = ts.getLineAndCharacterOfPosition(diagnostic.file!, diagnostic.start!)
        errors.set(`${diagnostic.file!.fileName}:${loc.line+1}:${loc.character+1}`, ["generateDTS", message])
    })

    if (errors.size > 0) {
        console.log(errors)
        console.log("")
        console.log(`${errors.size} errors`)
    }
})