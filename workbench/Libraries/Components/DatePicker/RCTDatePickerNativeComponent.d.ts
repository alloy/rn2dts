import { UniqueBranding } from "flow-builtin-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

import * as React from "react";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { WithDefault } from "react-native/Libraries/Types/CodegenTypes";
import { BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";

type Event = UniqueBranding & Readonly<{timestamp: Float;}>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  date?: Float | null | undefined;
  initialDate?: Float | null | undefined;
  locale?: string | null | undefined;
  maximumDate?: Float | null | undefined;
  minimumDate?: Float | null | undefined;
  minuteInterval?: WithDefault<1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30, 1>;
  mode?: WithDefault<"date" | "time" | "datetime", "date">;
  onChange?: BubblingEventHandler<Event> | null | undefined;
  timeZoneOffsetInMinutes?: Float | null | undefined;
}>;

type ComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeDate: ((viewRef: React.ElementRef<ComponentType>, date: Float) => void);
}

declare var Commands: NativeCommands;
export { Commands };

export default HostComponent<NativeProps>;