import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { WithDefault } from "react-native/Libraries/Types/CodegenTypes";
import { BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";

import { HostComponent } from "react-native/Libraries/Renderer/shims/ReactNativeTypes";

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

type SwitchChangeEvent = UniqueBranding & Readonly<{value: boolean;}>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  thumbColor?: ColorValue | null | undefined;
  trackColorForFalse?: ColorValue | null | undefined;
  trackColorForTrue?: ColorValue | null | undefined;
  value?: WithDefault<boolean, false>;
  on?: WithDefault<boolean, false>;
  thumbTintColor?: ColorValue | null | undefined;
  trackTintColor?: ColorValue | null | undefined;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent>;
}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeValue: ((viewRef: React.ElementRef<NativeType>, value: boolean) => void);
}

declare var Commands: NativeCommands;
export { Commands };

export default NativeType;