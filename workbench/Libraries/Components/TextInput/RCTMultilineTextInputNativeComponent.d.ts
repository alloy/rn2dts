import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

import { Int32 } from "../../Types/CodegenTypes";
import * as React from "react";

type NativeType = HostComponent<unknown>;

interface NativeCommands {
  readonly focus: ((viewRef: React.ElementRef<NativeType>) => void);
  readonly blur: ((viewRef: React.ElementRef<NativeType>) => void);
  readonly setMostRecentEventCount: ((viewRef: React.ElementRef<NativeType>, eventCount: Int32) => void);
  readonly setTextAndSelection: ((viewRef: React.ElementRef<NativeType>, mostRecentEventCount: Int32, value: string | null | undefined, // in theory this is nullable
  start: Int32, end: Int32) => void);
}

declare var Commands: NativeCommands;

declare var SinglelineTextInputNativeComponent: HostComponent<unknown>;
export { Commands };

export default typeof SinglelineTextInputNativeComponent;