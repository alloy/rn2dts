import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly operationComplete: ((token: number, result: string | null | undefined, error: string | null | undefined) => void);
}
export { Spec };

export default Spec | null | undefined;