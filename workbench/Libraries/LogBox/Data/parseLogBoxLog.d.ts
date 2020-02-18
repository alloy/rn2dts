import { UniqueBranding } from "flow-builtin-types";
import { ExceptionData } from "../../Core/NativeExceptionsManager";
import { LogBoxLogData } from "./LogBoxLog";
export declare type ExtendedExceptionData = ExceptionData & {
    isComponentError: boolean;
};
export declare type Category = string;
export declare type CodeFrame = UniqueBranding & Readonly<{
    content: string;
    location: {
        row: number;
        column: number;
    } | null | undefined;
    fileName: string;
}>;
export declare type Message = UniqueBranding & Readonly<{
    content: string;
    substitutions: ReadonlyArray<UniqueBranding & Readonly<{
        length: number;
        offset: number;
    }>>;
}>;
export declare type ComponentStack = ReadonlyArray<CodeFrame>;
export declare function parseCategory(args: ReadonlyArray<unknown>): UniqueBranding & Readonly<{
    category: Category;
    message: Message;
}>;
export declare function parseComponentStack(message: string): ComponentStack;
export declare function parseLogBoxException(error: ExtendedExceptionData): LogBoxLogData;
export declare function parseLogBoxLog(args: ReadonlyArray<unknown>): {
    componentStack: ComponentStack;
    category: Category;
    message: Message;
};
