import { UniqueBranding } from "flow-builtin-types";
import { WithDefault } from "../../Types/CodegenTypes";
import { ViewProps } from "../View/ViewPropTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  name?: WithDefault<string, "">;
}>;

export default HostComponent<NativeProps>;