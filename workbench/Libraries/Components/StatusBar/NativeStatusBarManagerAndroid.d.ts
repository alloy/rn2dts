import { TurboModule } from "../../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {readonly HEIGHT: number;readonly DEFAULT_BACKGROUND_COLOR: number;});
  readonly setColor: ((color: number, animated: boolean) => void);
  readonly setTranslucent: ((translucent: boolean) => void);
  readonly setStyle: ((statusBarStyle?: string | null | undefined) => void);
  readonly setHidden: ((hidden: boolean) => void);
}
export { Spec };

export default Spec;