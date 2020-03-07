import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getInitialURL: (() => Promise<string>);
  readonly canOpenURL: ((url: string) => Promise<boolean>);
  readonly openURL: ((url: string) => Promise<void>);
  readonly openSettings: (() => Promise<void>);
  readonly sendIntent: ((action: string, extras: Array<{key: string;value: string | number | boolean;}> | null | undefined) => Promise<void>);
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { Spec };

export default Spec;