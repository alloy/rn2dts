import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { ViewProps } from "../View/ViewPropTypes";

type Props = UniqueBranding & Readonly<ViewProps & {
  children: React.ReactNode;

  /**
     * Should be a React element to be rendered and applied as the
     * mask for the child element.
     */
  maskElement: React.ReactElement<any>;
}>;

declare class MaskedViewIOS extends React.Component<Props> {render(): React.ReactNode;}

declare module.exports: typeof MaskedViewIOS