declare var warningHandler: ((arg0: Array<any>) => void) | null | undefined;

declare var RCTLog: {
  // level one of log, info, warn, error, mustfix
  logIfNoNativeHook(level: string, ...args: Array<any>): void;
  // Log to console regardless of nativeLoggingHook
  logToConsole(level: string, ...args: Array<any>): void;
  setWarningHandler(handler: typeof warningHandler): void;
};

declare module.exports: typeof RCTLog