import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  readonly share: ((content: {title?: string;message?: string;}, dialogTitle?: string) => Promise<{action: string;}>);
}
export { Spec };

export default Spec | null | undefined;