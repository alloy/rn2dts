import { UniqueBranding } from "flow-builtin-types";
const DeprecatedTextPropTypes = require("../DeprecatedPropTypes/DeprecatedTextPropTypes");
const React = require("react");

import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { TextProps } from "./TextProps";

type TextStatics = UniqueBranding & Readonly<{propTypes: typeof DeprecatedTextPropTypes;}>;

declare module.exports: React.AbstractComponent<TextProps, React.ElementRef<HostComponent<TextProps>>> & TextStatics