import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { ViewProps } from "./ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type ViewNativeComponentType = HostComponent<ViewProps>;

declare var viewConfig: {} | {
  bubblingEventTypes?: UniqueBranding & Readonly<{
    [eventName: string]: UniqueBranding & Readonly<{
      phasedRegistrationNames: UniqueBranding & Readonly<{bubbled: string;captured: string;}>;
    }>;
  }>;
  directEventTypes?: UniqueBranding & Readonly<{
    [eventName: string]: UniqueBranding & Readonly<{registrationName: string;}>;
  }>;
  uiViewClassName: string;
  validAttributes?: {
    [propName: string]: true | (UniqueBranding & Readonly<{
      diff?: (<T>(arg1: any, arg2: any) => boolean);
      process?: ((arg1: any) => any);
    }>);
  };
};

declare var __INTERNAL_VIEW_CONFIG: typeof viewConfig;

interface NativeCommands {
  readonly hotspotUpdate: ((viewRef: React.ElementRef<HostComponent<unknown>>, x: number, y: number) => void);
  readonly setPressed: ((viewRef: React.ElementRef<HostComponent<unknown>>, pressed: boolean) => void);
}

declare var Commands: NativeCommands;
export { ViewNativeComponentType };

export { __INTERNAL_VIEW_CONFIG };

export { Commands };

export default ViewNativeComponentType;