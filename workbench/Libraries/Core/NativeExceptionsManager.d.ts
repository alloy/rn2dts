import { TurboModule } from "../TurboModule/RCTExport";

type StackFrame = {
  column: number | null | undefined;
  file: string | null | undefined;
  lineNumber: number | null | undefined;
  methodName: string;
  collapse?: boolean;
};

type ExceptionData = {
  message: string;
  originalMessage: string | null | undefined;
  name: string | null | undefined;
  componentStack: string | null | undefined;
  stack: Array<StackFrame>;
  id: number;
  isFatal: boolean;
  // flowlint-next-line unclear-type:off
  extraData?: any;

};

interface Spec extends TurboModule {
  readonly reportFatalException: ((message: string, stack: Array<StackFrame>, exceptionId: number) => void);
  readonly reportSoftException: ((message: string, stack: Array<StackFrame>, exceptionId: number) => void);
  readonly reportException?: ((data: ExceptionData) => void);
  readonly updateExceptionMessage: ((message: string, stack: Array<StackFrame>, exceptionId: number) => void);
  readonly dismissRedbox?: (() => void);
}

declare var ExceptionsManager: {
  reportFatalException(message: string, stack: Array<StackFrame>, exceptionId: number): void;
  reportSoftException(message: string, stack: Array<StackFrame>, exceptionId: number): void;
  updateExceptionMessage(message: string, stack: Array<StackFrame>, exceptionId: number): void;
  dismissRedbox(): void;
  reportException(data: ExceptionData): void;
};
export { StackFrame };

export { ExceptionData };

export { Spec };

export default typeof ExceptionsManager;