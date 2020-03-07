import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

type Props = UniqueBranding & Readonly<{

  /**
     * Whether or not this component should update.
     */
  shouldUpdate?: boolean | null | undefined;

  /**
     * Content short-circuited by React reconciliation process.
     */
  children: React.ReactNode;
}>;
declare class StaticContainer extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props): boolean;
  render(): React.ReactNode;
}

declare module.exports: typeof StaticContainer