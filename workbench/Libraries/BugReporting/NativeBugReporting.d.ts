import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly startReportAProblemFlow: (() => void);
  readonly setExtraData: ((extraData: any, extraFiles: any) => void);
  readonly setCategoryID: ((categoryID: string) => void);
}
export { Spec };

export default Spec | null | undefined;