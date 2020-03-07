import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {
    ERROR_CODE_EXCEPTION: number;
    ERROR_CODE_VIEW_NOT_FOUND: number;
  });
  readonly onSuccess: ((data: string) => void);
  readonly onFailure: ((errorCode: number, error: string) => void);
}
export { Spec };

export default Spec | null | undefined;