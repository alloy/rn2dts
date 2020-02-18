import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type Props = UniqueBranding & Readonly<ViewProps & {
    emulateUnlessSupported?: boolean;
}>;
declare let exported: React.AbstractComponent<Props, React.ElementRef<HostComponent<unknown>>>;
export default exported;
