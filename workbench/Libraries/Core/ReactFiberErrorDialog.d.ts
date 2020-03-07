type CapturedError = {
  readonly componentName: string | null | undefined;
  readonly componentStack: string;
  readonly error: unknown;
  readonly errorBoundary: {} | null | undefined;
  readonly errorBoundaryFound: boolean;
  readonly errorBoundaryName: string | null;
  readonly willRetry: boolean;

};

declare function showErrorDialog(capturedError: CapturedError): boolean;
export { CapturedError };

declare module.exports: {showErrorDialog: typeof showErrorDialog;}