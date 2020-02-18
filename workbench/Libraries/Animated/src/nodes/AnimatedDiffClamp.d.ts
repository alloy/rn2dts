import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedDiffClamp extends AnimatedWithChildren {
    constructor(a: AnimatedNode, min: number, max: number);
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
}
export default AnimatedDiffClamp;
