import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";

type CheckBoxEvent = React.SyntheticEvent<UniqueBranding & Readonly<{target: number;value: boolean;}>>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  /**
     * Used in case the props change removes the component.
     */
  onChange?: ((event: CheckBoxEvent) => unknown) | null | undefined;

  /**
     * Invoked with the new value when the value changes.
     */
  onValueChange?: ((value: boolean) => unknown) | null | undefined;

  /**
     * Used to locate this view in end-to-end tests.
     */
  testID?: string | null | undefined;
  on?: boolean | null | undefined;
  enabled?: boolean;
  tintColors: {true: number | null | undefined;false: number | null | undefined;} | typeof undefined;
}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeValue: ((viewRef: React.ElementRef<NativeType>, value: boolean) => void);
}

declare var Commands: NativeCommands;
export { Commands };

export default NativeType;