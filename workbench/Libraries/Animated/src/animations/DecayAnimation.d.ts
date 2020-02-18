import Animation from './Animation';
import AnimatedValue from "../nodes/AnimatedValue";
import { AnimationConfig, EndCallback } from "./Animation";
export declare type DecayAnimationConfig = AnimationConfig & {
    velocity: number | {
        x: number;
        y: number;
    };
    deceleration?: number;
};
export declare type DecayAnimationConfigSingle = AnimationConfig & {
    velocity: number;
    deceleration?: number;
};
declare class DecayAnimation extends Animation {
    constructor(config: DecayAnimationConfigSingle);
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    onUpdate(): void;
    stop(): void;
}
export default DecayAnimation;
