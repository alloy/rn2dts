import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {
    SHORT: number;
    LONG: number;
    TOP: number;
    BOTTOM: number;
    CENTER: number;
  });
  readonly show: ((message: string, duration: number) => void);
  readonly showWithGravity: ((message: string, duration: number, gravity: number) => void);
  readonly showWithGravityAndOffset: ((message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void);
}
export { Spec };

export default Spec;