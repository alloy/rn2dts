import AnimatedImplementation from '../../Animated/src/AnimatedImplementation';
import React from 'react';
import { LayoutEvent } from "../../Types/CoreEventTypes";
export declare type Props = {
    children?: React.ReactElement<any>;
    nextHeaderLayoutY: number | null | undefined;
    onLayout: ((event: LayoutEvent) => void);
    scrollAnimatedValue: typeof AnimatedImplementation.Value;
    inverted: boolean | null | undefined;
    scrollViewHeight: number | null | undefined;
};
declare type State = {
    measured: boolean;
    layoutY: number;
    layoutHeight: number;
    nextHeaderLayoutY: number | null | undefined;
};
declare class ScrollViewStickyHeader extends React.Component<Props, State> {
    state: State;
    setNextHeaderY(y: number): void;
    _onLayout: (event: any) => void;
    render(): React.ReactNode;
}
export default ScrollViewStickyHeader;
