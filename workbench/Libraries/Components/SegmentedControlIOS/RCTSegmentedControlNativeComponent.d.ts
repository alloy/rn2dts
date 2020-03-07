import { UniqueBranding } from "flow-builtin-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { BubblingEventHandler } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { Int32 } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";

type OnChangeEvent = UniqueBranding & Readonly<{value: Int32;selectedSegmentIndex: Int32;}>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  // Props
  values?: ReadonlyArray<string>;
  selectedIndex?: WithDefault<Int32, 0>;
  enabled?: WithDefault<boolean, true>;
  tintColor?: ColorValue | null | undefined;
  textColor?: ColorValue | null | undefined;
  backgroundColor?: ColorValue | null | undefined;
  momentary?: WithDefault<boolean, false>;
  // Events
  onChange?: BubblingEventHandler<OnChangeEvent> | null | undefined;
}>;
export { OnChangeEvent };

export default HostComponent<NativeProps>;