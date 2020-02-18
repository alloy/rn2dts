import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
declare type ExtrapolateType = "extend" | "identity" | "clamp";
export declare type InterpolationConfigType = {
    inputRange: Array<number>;
    outputRange: Array<number> | Array<string>;
    easing?: ((input: number) => number);
    extrapolate?: ExtrapolateType;
    extrapolateLeft?: ExtrapolateType;
    extrapolateRight?: ExtrapolateType;
};
declare class AnimatedInterpolation extends AnimatedWithChildren {
    constructor(parent: AnimatedNode, config: InterpolationConfigType);
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
}
export default AnimatedInterpolation;
