import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly connect: ((url: string, protocols: Array<string> | null | undefined, options: {
        headers?: {
            origin?: string;
        };
    } | null | undefined, socketID: number) => void);
    readonly send: ((message: string, socketID: number) => void);
    readonly sendBinary: ((base64String: string, socketID: number) => void);
    readonly ping: ((socketID: number) => void);
    readonly close: ((code: number, reason: string, socketID: number) => void);
    readonly addListener: ((eventName: string) => void);
    readonly removeListeners: ((count: number) => void);
}
declare const _default: Spec;
export default _default;
