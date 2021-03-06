import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedAddition extends AnimatedWithChildren {
    constructor(a: AnimatedNode | number, b: AnimatedNode | number);
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
}
export default AnimatedAddition;
