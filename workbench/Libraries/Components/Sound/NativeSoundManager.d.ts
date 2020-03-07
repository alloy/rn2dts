import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly playTouchSound: (() => void);
}
export { Spec };

export default Spec | null | undefined;