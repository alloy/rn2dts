import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { Spec };

export default Spec | null | undefined;