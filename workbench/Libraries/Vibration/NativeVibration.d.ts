import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  readonly vibrate: ((pattern?: number | null | undefined) => void);
  readonly vibrateByPattern: ((pattern: Array<number>, repeat: number) => void);
  readonly cancel: (() => void);
}
export { Spec };

export default Spec;