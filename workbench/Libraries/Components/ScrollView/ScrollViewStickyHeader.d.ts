const AnimatedImplementation = require("../../Animated/src/AnimatedImplementation");
const React = require("react");

import { LayoutEvent } from "../../Types/CoreEventTypes";

type Props = {
  children?: React.ReactElement<any>;
  nextHeaderLayoutY: number | null | undefined;
  onLayout: ((event: LayoutEvent) => void);
  scrollAnimatedValue: AnimatedImplementation.Value;
  // Will cause sticky headers to stick at the bottom of the ScrollView instead
  // of the top.
  inverted: boolean | null | undefined;
  // The height of the parent ScrollView. Currently only set when inverted.
  scrollViewHeight: number | null | undefined;

};

type State = {
  measured: boolean;
  layoutY: number;
  layoutHeight: number;
  nextHeaderLayoutY: number | null | undefined;

};

declare class ScrollViewStickyHeader extends React.Component<Props, State> {
  state: State;
  setNextHeaderY(y: number): void;
  render(): React.ReactNode;
}
export { Props };

declare module.exports: typeof ScrollViewStickyHeader