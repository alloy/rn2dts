type SpyData = {
  type: number;
  module: string | null | undefined;
  method: string | number;
  args: Array<any>;

};

declare class MessageQueue {
  __spy: ((data: SpyData) => void) | null | undefined;
  constructor(): void;
  spy(spyOrToggle: boolean | ((data: SpyData) => void)): void;
  callFunctionReturnFlushedQueue(module: string, method: string, args: Array<any>): null | [Array<number>, Array<number>, Array<any>, number];
  // Deprecated. T61834641: Remove me once native clients have updated
  callFunctionReturnResultAndFlushedQueue(module: string, method: string, args: Array<any>): void;
  invokeCallbackAndReturnFlushedQueue(cbID: number, args: Array<any>): null | [Array<number>, Array<number>, Array<any>, number];
  flushedQueue(): null | [Array<number>, Array<number>, Array<any>, number];
  getEventLoopRunningTime(): number;
  registerCallableModule(name: string, module: any): void;
  registerLazyCallableModule(name: string, factory: ((arg0: void) => any)): void;
  getCallableModule(name: string): any | null;
  callNativeSyncHook(moduleID: number, methodID: number, params: Array<any>, onFail: ((...args: any) => any) | null | undefined, onSucc: ((...args: any) => any) | null | undefined): any;
  processCallbacks(moduleID: number, methodID: number, params: Array<any>, onFail: ((...args: any) => any) | null | undefined, onSucc: ((...args: any) => any) | null | undefined): void;
  enqueueNativeCall(moduleID: number, methodID: number, params: Array<any>, onFail: ((...args: any) => any) | null | undefined, onSucc: ((...args: any) => any) | null | undefined): void;
  createDebugLookup(moduleID: number, name: string, methods: ReadonlyArray<string> | null | undefined): void;
  // For JSTimers to register its callback. Otherwise a circular dependency
  // between modules is introduced. Note that only one callback may be
  // registered at a time.
  setImmediatesCallback(fn: (() => void)): void;

  /**
     * Private methods
     */
  __guard(fn: (() => void)): void;
  // MessageQueue installs a global handler to catch all exceptions where JS users can register their own behavior
  // This handler makes all exceptions to be propagated from inside MessageQueue rather than by the VM at their origin
  // This makes stacktraces to be placed at MessageQueue rather than at where they were launched
  // The parameter DebuggerInternal.shouldPauseOnThrow is used to check before catching all exceptions and
  // can be configured by the VM or any Inspector
  __shouldPauseOnThrow(): boolean;
  __callImmediates(): void;
  __callFunction(module: string, method: string, args: Array<any>): void;
  __invokeCallback(cbID: number, args: Array<any>): void;
}
export { SpyData };

declare module.exports: typeof MessageQueue