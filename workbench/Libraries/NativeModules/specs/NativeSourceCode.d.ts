import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {scriptURL: string;});
}
export { Spec };

export default Spec;