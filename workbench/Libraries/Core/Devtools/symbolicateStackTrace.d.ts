import { UniqueBranding } from "flow-builtin-types";
import { StackFrame } from "../NativeExceptionsManager";

type CodeFrame = UniqueBranding & Readonly<{
  content: string;
  location: {row: number;column: number;} | null | undefined;
  fileName: string;
}>;

type SymbolicatedStackTrace = UniqueBranding & Readonly<{stack: Array<StackFrame>;codeFrame: CodeFrame | null | undefined;}>;

declare function symbolicateStackTrace(stack: Array<StackFrame>): Promise<SymbolicatedStackTrace>;
export { CodeFrame };

export { SymbolicatedStackTrace };

declare module.exports: typeof symbolicateStackTrace