import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly connect: ((url: string, protocols: Array<string> | null | undefined, options: {headers?: any;}, socketID: number) => void);
  readonly send: ((message: string, forSocketID: number) => void);
  readonly sendBinary: ((base64String: string, forSocketID: number) => void);
  readonly ping: ((socketID: number) => void);
  readonly close: ((code: number, reason: string, socketID: number) => void);
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { Spec };

export default Spec;