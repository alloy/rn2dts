import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  readonly getString: (() => Promise<string>);
  readonly setString: ((content: string) => void);
}
export { Spec };

export default Spec;