import { TurboModule } from "../TurboModule/RCTExport";

type DisplayMetricsAndroid = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  densityDpi: number;
};

type DisplayMetrics = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
};

type DimensionsPayload = {
  window?: DisplayMetrics;
  screen?: DisplayMetrics;
  windowPhysicalPixels?: DisplayMetricsAndroid;
  screenPhysicalPixels?: DisplayMetricsAndroid;
};

interface Spec extends TurboModule {
  readonly getConstants: (() => {
    readonly Dimensions: DimensionsPayload;
    readonly isIPhoneX_deprecated?: boolean;
  });
}

declare var NativeModule: Spec;

declare var NativeDeviceInfo: typeof NativeModule;
export { DisplayMetrics };

export { DimensionsPayload };

export { Spec };

export default typeof NativeDeviceInfo;