import AnimatedValue from '../nodes/AnimatedValue';
import AnimatedValueXY from '../nodes/AnimatedValueXY';
import Animation from './Animation';
import { AnimationConfig, EndCallback } from "./Animation";
export declare type TimingAnimationConfig = AnimationConfig & {
    toValue: number | AnimatedValue | {
        x: number;
        y: number;
    } | AnimatedValueXY;
    easing?: ((value: number) => number);
    duration?: number;
    delay?: number;
};
export declare type TimingAnimationConfigSingle = AnimationConfig & {
    toValue: number | AnimatedValue;
    easing?: ((value: number) => number);
    duration?: number;
    delay?: number;
};
declare class TimingAnimation extends Animation {
    constructor(config: TimingAnimationConfigSingle);
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    onUpdate(): void;
    stop(): void;
}
export default TimingAnimation;
