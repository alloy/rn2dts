// const Runner = require("jscodeshift/src/Runner");
// const paths = []
// Runner.run(path.resolve(options.transform), paths, options);

// const convertFlowToTS = require("flow-to-ts")


import fs from "fs"
import glob from "glob"
import path from "path"

import rimraf from "rimraf"

import convertFlowToTS from "@khanacademy/flow-to-ts/src/convert"
import detectJSX from "@khanacademy/flow-to-ts/src/detect-jsx"
import Runner from "jscodeshift/src/Runner"

const WORKBENCH = "./workbench"
const SOURCE = "./node_modules/react-native"

rimraf(WORKBENCH, err => {
    if (err) throw new Error(err.message)
    // const inputPaths = glob.sync("Libraries/**/!(__mocks__|__flowtests__)/*.js", { cwd: SOURCE });
    const inputPaths = ["Libraries/ActionSheetIOS/ActionSheetIOS.js"]
    inputPaths.forEach(inputPath => {
        fs.readFile(path.join(SOURCE, inputPath), (err, flowCodeData) => {
            if (err) throw new Error(err.message)
            const flowCode = flowCodeData.toString("utf-8")
            const tsCode = convertFlowToTS(flowCode)
            const extension = detectJSX(flowCode) ? ".tsx" : ".ts"
            const tsPath = path.join(WORKBENCH, inputPath.replace(/\.js$/, extension))
            fs.mkdir(path.dirname(tsPath), { recursive: true }, err => {
                if (err) throw new Error(err.message)
                fs.writeFile(tsPath, tsCode, err => {
                    if (err) throw new Error(err.message)
                    Runner.run(
                        path.resolve("./codemods/imports-exports.js"),
                        [tsPath],
                        { extensions: "ts,tsx", parser: "tsx", silent: true, runInBand: true }
                    )
                })
            })
        })
    })
})