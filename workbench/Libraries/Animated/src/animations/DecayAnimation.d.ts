import Animation from './Animation';
import { $TEMPORARY$string } from "flow-builtin-types";
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
    _startTime: number;
    _lastValue: number;
    _fromValue: number;
    _deceleration: number;
    _velocity: number;
    _onUpdate: ((value: number) => void);
    _animationFrame: any;
    _useNativeDriver: boolean;
    constructor(config: DecayAnimationConfigSingle);
    __getNativeAnimationConfig(): {
        deceleration: number;
        iterations: number;
        type: $TEMPORARY$string<"decay">;
        velocity: number;
    };
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    onUpdate(): void;
    stop(): void;
}
export default DecayAnimation;
