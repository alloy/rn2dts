import { UniqueBranding } from "flow-builtin-types";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { Double } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  //Props
  styleAttr?: string;
  typeAttr?: string;
  indeterminate: boolean;
  progress?: WithDefault<Double, 0>;
  animating?: WithDefault<boolean, true>;
  color?: ColorValue | null | undefined;
  testID?: WithDefault<string, "">;
}>;

export default HostComponent<NativeProps>;