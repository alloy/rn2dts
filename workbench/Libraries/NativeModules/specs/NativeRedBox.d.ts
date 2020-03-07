import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly setExtraData: ((extraData: any, forIdentifier: string) => void);
  readonly dismiss: (() => void);
}
export { Spec };

export default Spec | null | undefined;