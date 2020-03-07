import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly notifyTaskFinished: ((taskId: number) => void);
  readonly notifyTaskRetry: ((taskId: number) => Promise<boolean>);
}
export { Spec };

export default Spec | null | undefined;