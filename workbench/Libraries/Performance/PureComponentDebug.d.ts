const React = require("react");

type DoNotCommitUsageOfPureComponentDebug = {};

declare class PureComponentDebug<P extends DoNotCommitUsageOfPureComponentDebug, S extends any | null | undefined = void> extends React.Component<P, S> {
  shouldComponentUpdate(nextProps: P, nextState: S): boolean;
}

declare module.exports: typeof PureComponentDebug