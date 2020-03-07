import { TurboModule } from "../TurboModule/RCTExport";

interface Spec extends TurboModule {
  readonly getConstants: (() => {
    isTesting: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: number | null | undefined;
    };
    forceTouchAvailable: boolean;
    osVersion: string;
    systemName: string;
    interfaceIdiom: string;
  });
}
export { Spec };

export default Spec;