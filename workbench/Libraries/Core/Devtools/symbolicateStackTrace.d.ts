import { StackFrame } from "../NativeExceptionsManager";
declare function symbolicateStackTrace(stack: Array<StackFrame>): Promise<Array<StackFrame>>;
export default symbolicateStackTrace;
