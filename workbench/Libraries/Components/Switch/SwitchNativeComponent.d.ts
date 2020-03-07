import { UniqueBranding } from "flow-builtin-types";
import { BubblingEventHandler } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type SwitchChangeEvent = UniqueBranding & Readonly<{value: boolean;}>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  value?: WithDefault<boolean, false>;
  tintColor?: ColorValue | null | undefined;
  onTintColor?: ColorValue | null | undefined;
  thumbTintColor?: ColorValue | null | undefined;
  // Deprecated props
  thumbColor?: ColorValue | null | undefined;
  trackColorForFalse?: ColorValue | null | undefined;
  trackColorForTrue?: ColorValue | null | undefined;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent> | null | undefined;
}>;

type ComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setValue: ((viewRef: React.ElementRef<ComponentType>, value: boolean) => void);
}

declare var Commands: NativeCommands;
export { Commands };

export default ComponentType;