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
declare class ScrollViewStickyHeader extends React.Component<Props> {
    setNextHeaderY(y: number): void;
}
export default ScrollViewStickyHeader;
