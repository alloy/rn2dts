import { $TEMPORARY$array } from "flow-builtin-types";
export declare type SpyData = {
    type: number;
    module: string | null | undefined;
    method: string | number;
    args: any[];
};
declare class MessageQueue {
    constructor();
    /**
     * Public APIs
     */
    static spy(spyOrToggle: boolean | ((data: SpyData) => void)): void;
    callFunctionReturnFlushedQueue(module: string, method: string, args: any[]): null | [Array<number>, Array<number>, Array<any>, number];
    callFunctionReturnResultAndFlushedQueue(module: string, method: string, args: any[]): $TEMPORARY$array<[Array<number>, Array<number>, Array<any>, number] | null | undefined>;
    invokeCallbackAndReturnFlushedQueue(cbID: number, args: any[]): null | [Array<number>, Array<number>, Array<any>, number];
    flushedQueue(): null | [Array<number>, Array<number>, Array<any>, number];
    getEventLoopRunningTime(): number;
    registerCallableModule(name: string, module: any): void;
    registerLazyCallableModule(name: string, factory: ((arg0: void) => any)): void;
    getCallableModule(name: string): any | null;
    callNativeSyncHook(moduleID: number, methodID: number, params: any[], onFail: ((...args: any) => any) | null | undefined, onSucc: ((...args: any) => any) | null | undefined): any;
    processCallbacks(moduleID: number, methodID: number, params: any[], onFail: ((...args: any) => any) | null | undefined, onSucc: ((...args: any) => any) | null | undefined): void;
    enqueueNativeCall(moduleID: number, methodID: number, params: any[], onFail: ((...args: any) => any) | null | undefined, onSucc: ((...args: any) => any) | null | undefined): void;
    createDebugLookup(moduleID: number, name: string, methods: ReadonlyArray<string> | null | undefined): void;
    setImmediatesCallback(fn: (() => void)): void;
}
export default MessageQueue;
