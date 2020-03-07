import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly open: ((options: any) => Promise<any>);
}
export { Spec };

export default Spec;