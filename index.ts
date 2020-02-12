import fs from "fs"
import glob from "glob"
import path from "path"

import rimraf from "rimraf"
import { SingleBar as ProgressBar } from "cli-progress"
import convertFlowToTS from "@khanacademy/flow-to-ts/src/convert"
import detectJSX from "@khanacademy/flow-to-ts/src/detect-jsx"
import jscodeshift from "jscodeshift/src/core"
import { Transform } from "jscodeshift"

import { transformer as importsExportsTransformer } from "./codemods/imports-exports"
import { transformer as noopsTransformer } from "./codemods/noops"

const WORKBENCH = "./workbench"
const SOURCE = "./node_modules/react-native"
const SOURCE_GLOB = "Libraries/**/!(__mocks__|__flowtests__)/*.js"
const JSCODESHIFT = jscodeshift.withParser("tsx")

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

rimraf(WORKBENCH, err => {
    if (err) throw new Error(err.message)

    const inputPaths = glob.sync(SOURCE_GLOB, { cwd: SOURCE });

    const progressBar = new ProgressBar({
        format: 'Progress |{bar}| {percentage}% || {value}/{total} Files',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true,
        stopOnComplete: true,
        forceRedraw: true,
    })
    progressBar.start(inputPaths.length, 0)

    const errors = new Map<string, [string, Error]>()
    const captureError = <T>(inputPath: string, name: string, task: () => T): T => {
        try {
            return task()
        } catch(err) {
            errors.set(inputPath, [name, err])
            throw err
        }
    }

    inputPaths.forEach(inputPath => {
        try {
            const flowCode = captureError(inputPath, "readFileSync", () => fs.readFileSync(path.join(SOURCE, inputPath), "utf-8"))
            const extension = detectJSX(flowCode) ? ".tsx" : ".ts"
            const tsPath = path.join(WORKBENCH, inputPath.replace(/\.js$/, extension))
            
            let tsCode = captureError(inputPath, "convertFlowToTS", () => convertFlowToTS(flowCode))
            tsCode = captureError(inputPath, "importsExportsTransformer", () => codemod(importsExportsTransformer, tsPath, tsCode))
            tsCode = captureError(inputPath, "noopsTransformer", () => codemod(noopsTransformer, tsPath, tsCode))
            
            captureError(inputPath, "mkdirSync", () => fs.mkdirSync(path.dirname(tsPath), { recursive: true }))
            captureError(inputPath, "writeFileSync", () => fs.writeFileSync(tsPath, tsCode))
        } catch {
        } finally {
            progressBar.increment()
        }
    })

    if (errors.size > 0) {
        console.log(errors)
    }
})