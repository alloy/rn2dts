import { StackFrame } from "../NativeExceptionsManager";
export declare type ExtendedError = Error & {
    framesToPop?: number;
    jsEngine?: string;
    preventSymbolication?: boolean;
    componentStack?: string;
};
declare function parseErrorStack(e: ExtendedError): Array<StackFrame>;
export default parseErrorStack;
