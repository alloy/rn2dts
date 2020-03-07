import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly readAsDataURL: ((data: any) => Promise<string>);
  readonly readAsText: ((data: any, encoding: string) => Promise<string>);
}
export { Spec };

export default Spec;