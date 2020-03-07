import { StackFrame } from "../NativeExceptionsManager";

type ExtendedError = Error & {
  jsEngine?: string;
  preventSymbolication?: boolean;
  componentStack?: string;
  forceRedbox?: boolean;
  isComponentError?: boolean;

};

declare function parseErrorStack(e: ExtendedError): Array<StackFrame>;
export { ExtendedError };

declare module.exports: typeof parseErrorStack