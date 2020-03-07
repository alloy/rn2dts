import { $FlowFixMeProps } from "flow-builtin-types";
const React = require("react");

declare class ImageBackground extends React.Component<$FlowFixMeProps> {
  setNativeProps(props: any): void;
  render(): React.ReactNode;
}

declare module.exports: typeof ImageBackground