import { UniqueBranding } from "flow-builtin-types";
import { Category, Message } from "./YellowBoxCategory";
import { Stack } from "./YellowBoxSymbolication";
export declare type SymbolicationRequest = UniqueBranding & Readonly<{
    abort: (() => void);
}>;
declare class YellowBoxWarning {
    static parse({ args }: UniqueBranding & Readonly<{
        args: ReadonlyArray<unknown>;
    }>): {
        category: Category;
        message: Message;
        stack: Stack;
    };
    message: Message;
    stack: Stack;
    symbolicated: (UniqueBranding & Readonly<{
        error: null;
        stack: null;
        status: "NONE";
    }>) | (UniqueBranding & Readonly<{
        error: null;
        stack: null;
        status: "PENDING";
    }>) | (UniqueBranding & Readonly<{
        error: null;
        stack: Stack;
        status: "COMPLETE";
    }>) | (UniqueBranding & Readonly<{
        error: Error;
        stack: null;
        status: "FAILED";
    }>);
    constructor(message: Message, stack: Stack);
    getAvailableStack(): Stack;
    retrySymbolicate(callback: (() => void)): SymbolicationRequest;
    symbolicate(callback: (() => void)): SymbolicationRequest;
}
export default YellowBoxWarning;
