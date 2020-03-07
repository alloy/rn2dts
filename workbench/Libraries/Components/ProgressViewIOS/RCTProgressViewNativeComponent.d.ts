import { UniqueBranding } from "flow-builtin-types";
import { Float } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  // Props
  progressViewStyle?: WithDefault<"default" | "bar", "default">;
  progress?: WithDefault<Float, 0>;
  progressTintColor?: ColorValue | null | undefined;
  trackTintColor?: ColorValue | null | undefined;
  progressImage?: ImageSource | null | undefined;
  trackImage?: ImageSource | null | undefined;
}>;

export default HostComponent<NativeProps>;