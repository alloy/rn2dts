import AnimatedValue from './AnimatedValue';
import AnimatedNode from './AnimatedNode';
import { EndCallback } from "../animations/Animation";
declare class AnimatedTracking extends AnimatedNode {
    constructor(value: AnimatedValue, parent: AnimatedNode, animationClass: any, animationConfig: any, callback?: EndCallback | null | undefined);
    update(): void;
}
export default AnimatedTracking;
