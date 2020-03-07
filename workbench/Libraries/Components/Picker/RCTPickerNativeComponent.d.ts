import { UniqueBranding, Stringish } from "flow-builtin-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";

import * as React from "react";

type PickerIOSChangeEvent = React.SyntheticEvent<UniqueBranding & Readonly<{newValue: number | string;newIndex: number;}>>;

type RCTPickerIOSItemType = UniqueBranding & Readonly<{label: Label | null | undefined;value: (number | string) | null | undefined;textColor: number | null | undefined;}>;

type Label = Stringish | number;

type NativeProps = UniqueBranding & Readonly<{
  items: ReadonlyArray<RCTPickerIOSItemType>;
  onChange: ((event: PickerIOSChangeEvent) => void);
  selectedIndex: number;
  style?: TextStyleProp | null | undefined;
  testID?: string | null | undefined;
  accessibilityLabel?: string | null | undefined;
}>;

type ComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeSelectedIndex: ((viewRef: React.ElementRef<ComponentType>, index: number) => void);
}

declare var Commands: NativeCommands;

declare var RCTPickerNativeComponent: ComponentType;
export { Commands };

export default typeof RCTPickerNativeComponent;