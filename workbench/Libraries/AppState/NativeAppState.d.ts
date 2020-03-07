import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {initialAppState: string;});
  readonly getCurrentAppState: ((success: ((appState: {app_state: string;}) => void), error: ((error: any) => void)) => void);
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { Spec };

export default Spec;