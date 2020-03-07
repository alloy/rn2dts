import { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly show: (() => void);
  readonly hide: (() => void);
}
export { Spec };

export default Spec | null | undefined;