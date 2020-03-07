import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {isRTL: boolean;doLeftAndRightSwapInRTL: boolean;});
  allowRTL: ((allowRTL: boolean) => void);
  forceRTL: ((forceRTL: boolean) => void);
  swapLeftAndRightInRTL: ((flipStyles: boolean) => void);
}
export { Spec };

export default Spec | null | undefined;