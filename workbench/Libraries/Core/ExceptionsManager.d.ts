import { ExceptionData } from "./NativeExceptionsManager";

declare class SyntheticError extends Error {name: string;}

type ExceptionDecorator = ((arg0: ExceptionData) => ExceptionData);

declare function unstable_setExceptionDecorator(exceptionDecorator: ExceptionDecorator | null | undefined): void;

declare function handleException(e: unknown, isFatal: boolean): void;

declare function installConsoleErrorReporter(): void;

declare module.exports: {
  handleException: typeof handleException;
  installConsoleErrorReporter: typeof installConsoleErrorReporter;
  SyntheticError: typeof SyntheticError;
  unstable_setExceptionDecorator: typeof unstable_setExceptionDecorator;
}