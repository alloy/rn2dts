import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly captureComplete: ((path: string, error: string | null | undefined) => void);
}
export { Spec };

export default Spec | null | undefined;