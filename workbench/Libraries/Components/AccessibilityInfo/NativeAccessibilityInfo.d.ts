import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly isReduceMotionEnabled: ((onSuccess: ((isReduceMotionEnabled: boolean) => void)) => void);
  readonly isTouchExplorationEnabled: ((onSuccess: ((isScreenReaderEnabled: boolean) => void)) => void);
  readonly setAccessibilityFocus: ((reactTag: number) => void);
  readonly announceForAccessibility: ((announcement: string) => void);
}
export { Spec };

export default Spec | null | undefined;