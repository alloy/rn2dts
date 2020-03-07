import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly showMessage: ((message: string, color: any, backgroundColor: any) => void);
  readonly hide: (() => void);
}
export { Spec };

export default Spec | null | undefined;