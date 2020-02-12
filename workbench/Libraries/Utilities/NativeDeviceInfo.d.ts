import { $ReadOnly } from "utility-types";
import { TurboModule } from "../TurboModule/RCTExport";
declare type DisplayMetricsAndroid = $ReadOnly<{
    width: number;
    height: number;
    scale: number;
    fontScale: number;
    densityDpi: number;
}>;
export declare type DisplayMetrics = $ReadOnly<{
    width: number;
    height: number;
    scale: number;
    fontScale: number;
}>;
export declare type DimensionsPayload = $ReadOnly<{
    window?: DisplayMetrics;
    screen?: DisplayMetrics;
    windowPhysicalPixels?: DisplayMetricsAndroid;
    screenPhysicalPixels?: DisplayMetricsAndroid;
}>;
export interface Spec extends TurboModule {
    readonly getConstants: (() => {
        readonly Dimensions: DimensionsPayload;
        readonly isIPhoneX_deprecated?: boolean;
    });
}
declare const NativeDeviceInfo: Spec;
export default NativeDeviceInfo;
