import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly startRecordingFps: (() => void);
  readonly stopRecordingFps: ((animationStopTimeMs: number) => void);
}
export { Spec };

export default Spec | null | undefined;