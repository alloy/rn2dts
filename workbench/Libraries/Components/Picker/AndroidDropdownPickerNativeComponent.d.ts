import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { DirectEventHandler } from "../../Types/CodegenTypes";
import { Int32 } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../../Components/View/ViewPropTypes";

type PickerItem = UniqueBranding & Readonly<{label: string;color?: Int32 | null | undefined;}>;

type PickerItemSelectEvent = UniqueBranding & Readonly<{position: Int32;}>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  style?: TextStyleProp | null | undefined;
  // Props
  color?: ColorValue | null | undefined;
  enabled?: WithDefault<boolean, true>;
  items: ReadonlyArray<PickerItem>;
  prompt?: WithDefault<string, "">;
  selected: Int32;
  // Events
  onSelect?: DirectEventHandler<PickerItemSelectEvent>;
}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeSelectedPosition: ((viewRef: React.ElementRef<NativeType>, index: number) => void);
}

declare var Commands: NativeCommands;
export { Commands };

export default NativeType;