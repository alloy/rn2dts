import { UniqueBranding } from "flow-builtin-types";
import { ViewProps } from "../View/ViewPropTypes";
import { WithDefault } from "../../Types/CodegenTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  // Props
  emulateUnlessSupported?: WithDefault<boolean, false>;
}>;

export default HostComponent<NativeProps>;