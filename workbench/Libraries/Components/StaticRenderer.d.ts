import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

type Props = UniqueBranding & Readonly<{

  /**
     * Indicates whether the render function needs to be called again
     */
  shouldUpdate: boolean;

  /**
     * () => renderable
     * A function that returns a renderable component
     */
  render: (() => React.ReactNode);
}>;

declare class StaticRenderer extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props): boolean;
  render(): React.ReactNode;
}

declare module.exports: typeof StaticRenderer