import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly sendRequest: ((query: {
    method: string;
    url: string;
    data: any;
    headers: any;
    responseType: string;
    incrementalUpdates: boolean;
    timeout: number;
    withCredentials: boolean;
  }, callback: ((requestId: number) => void)) => void);
  readonly abortRequest: ((requestId: number) => void);
  readonly clearCookies: ((callback: ((result: boolean) => void)) => void);
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { Spec };

export default Spec;