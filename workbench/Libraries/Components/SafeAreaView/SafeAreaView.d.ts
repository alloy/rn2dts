import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

type Props = UniqueBranding & Readonly<ViewProps & {
  emulateUnlessSupported?: boolean;
}>;

declare var exported: React.AbstractComponent<Props, React.ElementRef<HostComponent<unknown>>>;

declare module.exports: typeof exported