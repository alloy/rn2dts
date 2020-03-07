import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly invokeDefaultBackPressHandler: (() => void);
}
export { Spec };

export default Spec | null | undefined;