import { React$Component } from "flow-builtin-types";
import { $ReadOnly, Class } from "utility-types";
import { NativeComponent } from "../../Renderer/shims/ReactNative";
import { ViewProps } from "../View/ViewPropTypes";
declare type Props = $ReadOnly<ViewProps & {
    emulateUnlessSupported?: boolean;
}>;
declare let exported: Class<React$Component<Props>> | Class<NativeComponent<Props>>;
export default exported;
