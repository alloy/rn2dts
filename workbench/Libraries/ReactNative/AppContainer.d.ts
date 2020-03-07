import { UniqueBranding, React$PropType$Primitive } from "flow-builtin-types";
const React = require("react");

type Context = {rootTag: number;};

type Props = UniqueBranding & Readonly<{
  children?: React.ReactNode;
  fabric?: boolean;
  rootTag: number;
  showArchitectureIndicator?: boolean;
  WrapperComponent?: React.ComponentType<any> | null | undefined;
  internal_excludeLogBox?: boolean | null | undefined;
}>;

type State = {inspector: React.ReactNode | null | undefined;mainKey: number;hasError: boolean;};

declare class AppContainer extends React.Component<Props, State> {
  state: State;
  getDerivedStateFromError: any;
  childContextTypes: any | {rootTag: React$PropType$Primitive<number>;};
  getChildContext(): Context;
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): React.ReactNode;
}

declare module.exports: typeof AppContainer