import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {BLOB_URI_SCHEME: string | null | undefined;BLOB_URI_HOST: string | null | undefined;});
  readonly addNetworkingHandler: (() => void);
  readonly addWebSocketHandler: ((id: number) => void);
  readonly removeWebSocketHandler: ((id: number) => void);
  readonly sendOverSocket: ((blob: any, socketID: number) => void);
  readonly createFromParts: ((parts: Array<any>, withId: string) => void);
  readonly release: ((blobId: string) => void);
}
export { Spec };

export default Spec | null | undefined;