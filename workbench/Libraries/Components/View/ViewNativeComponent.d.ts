import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import { ViewProps } from "./ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
export declare type ViewNativeComponentType = HostComponent<ViewProps>;
export declare const __INTERNAL_VIEW_CONFIG: {} | {
    bubblingEventTypes?: (UniqueBranding & Readonly<{
        [eventName: string]: UniqueBranding & Readonly<{
            phasedRegistrationNames: UniqueBranding & Readonly<{
                bubbled: string;
                captured: string;
            }>;
        }>;
    }>) | undefined;
    directEventTypes?: (UniqueBranding & Readonly<{
        [eventName: string]: UniqueBranding & Readonly<{
            registrationName: string;
        }>;
    }>) | undefined;
    uiViewClassName: string;
    validAttributes?: {
        [propName: string]: true | (UniqueBranding & Readonly<{
            diff?: (<T>(arg1: any, arg2: any) => boolean) | undefined;
            process?: ((arg1: any) => any) | undefined;
        }>);
    } | undefined;
};
interface NativeCommands {
    readonly hotspotUpdate: ((viewRef: React.ElementRef<HostComponent<unknown>>, x: number, y: number) => void);
    readonly setPressed: ((viewRef: React.ElementRef<HostComponent<unknown>>, pressed: boolean) => void);
}
export declare const Commands: NativeCommands;
declare const _default: React.AbstractComponent<ViewProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
