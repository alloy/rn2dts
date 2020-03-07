type NativeColorType = {};
type ProcessedColorValue = (number | null | undefined) | NativeColorType;

declare function processColor(color?: (string | number) | null | undefined): ProcessedColorValue;
export { ProcessedColorValue };

declare module.exports: typeof processColor