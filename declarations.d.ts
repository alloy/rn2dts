declare module "@khanacademy/flow-to-ts/src/convert" {
    export default function convert(
        flowCode: string,
        options?: {
            debug?: boolean,
            prettier?: boolean,
            inlineUtilityTypes?: boolean
        }
    ): string
}

declare module "@khanacademy/flow-to-ts/src/detect-jsx" {
    export default function detectJsx(code: string): boolean
}

declare module "jscodeshift/src/Runner" {
    const Runner: {
        run: (
            transformFile: string,
            paths: string[],
            options: {
                extensions?: string,
                parser?: 'babel' | 'babylon' | 'flow' | 'ts' | 'tsx',
                silent?: boolean,
                runInBand?: boolean
            }) => void
    }
    export default Runner
}