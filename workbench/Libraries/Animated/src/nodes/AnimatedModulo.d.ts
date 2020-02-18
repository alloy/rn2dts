import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedModulo extends AnimatedWithChildren {
    constructor(a: AnimatedNode, modulus: number);
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
}
export default AnimatedModulo;
