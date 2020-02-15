import AnimatedValue from '../nodes/AnimatedValue';
import AnimatedValueXY from '../nodes/AnimatedValueXY';
import Animation from './Animation';
import { $TEMPORARY$string } from "flow-builtin-types";
import { AnimationConfig, EndCallback } from "./Animation";
export declare type SpringAnimationConfig = AnimationConfig & {
    toValue: number | AnimatedValue | {
        x: number;
        y: number;
    } | AnimatedValueXY;
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?: number | {
        x: number;
        y: number;
    };
    bounciness?: number;
    speed?: number;
    tension?: number;
    friction?: number;
    stiffness?: number;
    damping?: number;
    mass?: number;
    delay?: number;
};
export declare type SpringAnimationConfigSingle = AnimationConfig & {
    toValue: number | AnimatedValue;
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?: number;
    bounciness?: number;
    speed?: number;
    tension?: number;
    friction?: number;
    stiffness?: number;
    damping?: number;
    mass?: number;
    delay?: number;
};
declare class SpringAnimation extends Animation {
    _overshootClamping: boolean;
    _restDisplacementThreshold: number;
    _restSpeedThreshold: number;
    _lastVelocity: number;
    _startPosition: number;
    _lastPosition: number;
    _fromValue: number;
    _toValue: any;
    _stiffness: number;
    _damping: number;
    _mass: number;
    _initialVelocity: number;
    _delay: number;
    _timeout: any;
    _startTime: number;
    _lastTime: number;
    _frameTime: number;
    _onUpdate: ((value: number) => void);
    _animationFrame: any;
    _useNativeDriver: boolean;
    constructor(config: SpringAnimationConfigSingle);
    __getNativeAnimationConfig(): {
        damping: number;
        initialVelocity: number;
        iterations: number;
        mass: number;
        overshootClamping: boolean;
        restDisplacementThreshold: number;
        restSpeedThreshold: number;
        stiffness: number;
        toValue: any;
        type: $TEMPORARY$string<"spring">;
    };
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    getInternalState(): any;
    /**
     * This spring model is based off of a damped harmonic oscillator
     * (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
     *
     * We use the closed form of the second order differential equation:
     *
     * x'' + (2ζ⍵_0)x' + ⍵^2x = 0
     *
     * where
     *    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
     *    ζ = c / 2√mk (damping ratio),
     *    c = damping constant
     *    k = stiffness
     *    m = mass
     *
     * The derivation of the closed form is described in detail here:
     * http://planetmath.org/sites/default/files/texpdf/39745.pdf
     *
     * This algorithm happens to match the algorithm used by CASpringAnimation,
     * a QuartzCore (iOS) API that creates spring animations.
     */
    onUpdate(): void;
    stop(): void;
}
export default SpringAnimation;
