import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {settings: any;});
  readonly setValues: ((values: any) => void);
  readonly deleteValues: ((values: Array<string>) => void);
}
export { Spec };

export default Spec;