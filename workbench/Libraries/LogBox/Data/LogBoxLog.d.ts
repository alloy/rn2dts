import { UniqueBranding } from "flow-builtin-types";
import { Category, Message, ComponentStack, CodeFrame } from "./parseLogBoxLog";
import { Stack } from "./LogBoxSymbolication";
declare type SymbolicationStatus = "NONE" | "PENDING" | "COMPLETE" | "FAILED";
export declare type LogLevel = "warn" | "error" | "fatal" | "syntax";
export declare type LogBoxLogData = UniqueBranding & Readonly<{
    level: LogLevel;
    message: Message;
    stack: Stack;
    category: string;
    componentStack: ComponentStack;
    codeFrame?: CodeFrame | null | undefined;
    isComponentError: boolean;
}>;
declare class LogBoxLog {
    message: Message;
    category: Category;
    componentStack: ComponentStack;
    stack: Stack;
    count: number;
    level: LogLevel;
    codeFrame: CodeFrame | null | undefined;
    isComponentError: boolean;
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
    constructor(data: LogBoxLogData);
    incrementCount(): void;
    getAvailableStack(): Stack;
    retrySymbolicate(callback?: ((status: SymbolicationStatus) => void)): void;
    symbolicate(callback?: ((status: SymbolicationStatus) => void)): void;
    handleSymbolicate(callback?: ((status: SymbolicationStatus) => void)): void;
    updateStatus(error: Error | null | undefined, stack: Stack | null | undefined, codeFrame: CodeFrame | null | undefined, callback?: ((status: SymbolicationStatus) => void)): void;
}
export default LogBoxLog;
