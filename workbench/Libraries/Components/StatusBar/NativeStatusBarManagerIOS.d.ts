import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {readonly HEIGHT: number;readonly DEFAULT_BACKGROUND_COLOR?: number;});
  readonly getHeight: ((callback: ((result: {height: number;}) => void)) => void);
  readonly setNetworkActivityIndicatorVisible: ((visible: boolean) => void);
  readonly addListener: ((eventType: string) => void);
  readonly removeListeners: ((count: number) => void);
  readonly setStyle: ((statusBarStyle?: string | null | undefined, animated: boolean) => void);
  readonly setHidden: ((hidden: boolean, withAnimation: string) => void);
}
export { Spec };

export default Spec;