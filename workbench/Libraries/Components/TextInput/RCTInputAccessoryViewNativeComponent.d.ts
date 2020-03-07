import { UniqueBranding } from "flow-builtin-types";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  backgroundColor?: ColorValue | null | undefined;
}>;

export default HostComponent<NativeProps>;