import { UniqueBranding } from "flow-builtin-types";
import { ViewProps } from "../View/ViewPropTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps>;

export default HostComponent<NativeProps>;