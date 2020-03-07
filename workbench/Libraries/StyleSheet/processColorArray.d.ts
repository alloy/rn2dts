import { ProcessedColorValue } from "./processColor";

declare function processColorArray(colors: Array<string> | null | undefined): Array<ProcessedColorValue> | null | undefined;

declare module.exports: typeof processColorArray