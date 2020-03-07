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
    Version: number;
    Release: string;
    Serial: string;
    Fingerprint: string;
    Model: string;
    ServerHost?: string;
    uiMode: string;
  });
  readonly getAndroidID: (() => string);
}
export { Spec };

export default Spec;