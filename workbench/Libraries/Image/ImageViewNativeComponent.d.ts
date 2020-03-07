import { UniqueBranding } from "flow-builtin-types";
import { DangerouslyImpreciseStyle } from "../StyleSheet/StyleSheet";
import { ResolvedAssetSource } from "./AssetSourceResolver";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { ImageProps } from "./ImageProps";
import { ViewProps } from "../Components/View/ViewPropTypes";
import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import { ColorValue } from "../StyleSheet/StyleSheetTypes";

type NativeProps = UniqueBranding & Readonly<ImageProps & ViewProps & {
  style?: ImageStyleProp | DangerouslyImpreciseStyle;
  // iOS native props
  tintColor?: ColorValue;
  // Android native props
  shouldNotifyLoadEvents?: boolean;
  src?: (ResolvedAssetSource | null | undefined) | ReadonlyArray<{uri: string;}>;
  headers?: string | null | undefined;
  defaultSrc?: string | null | undefined;
  loadingIndicatorSrc?: string | null | undefined;
}>;

export default HostComponent<NativeProps>;