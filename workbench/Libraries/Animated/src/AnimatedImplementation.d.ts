import AnimatedAddition from './nodes/AnimatedAddition';
import AnimatedDiffClamp from './nodes/AnimatedDiffClamp';
import AnimatedDivision from './nodes/AnimatedDivision';
import AnimatedInterpolation from './nodes/AnimatedInterpolation';
import AnimatedModulo from './nodes/AnimatedModulo';
import AnimatedMultiplication from './nodes/AnimatedMultiplication';
import AnimatedNode from './nodes/AnimatedNode';
import AnimatedProps from './nodes/AnimatedProps';
import AnimatedSubtraction from './nodes/AnimatedSubtraction';
import AnimatedValue from './nodes/AnimatedValue';
import AnimatedValueXY from './nodes/AnimatedValueXY';
import createAnimatedComponent from './createAnimatedComponent';
import { AnimatedEvent, attachNativeEvent } from "./AnimatedEvent";
import { EndCallback } from "./animations/Animation";
import { TimingAnimationConfig } from "./animations/TimingAnimation";
import { DecayAnimationConfig } from "./animations/DecayAnimation";
import { SpringAnimationConfig } from "./animations/SpringAnimation";
import { Mapping, EventConfig } from "./AnimatedEvent";
export declare type CompositeAnimation = {
    start: ((callback?: EndCallback | null | undefined) => void);
    stop: (() => void);
    reset: (() => void);
    _startNativeLoop: ((iterations?: number) => void);
    _isUsingNativeDriver: (() => boolean);
};
declare type ParallelConfig = {
    stopTogether?: boolean;
};
declare type LoopAnimationConfig = {
    iterations: number;
    resetBeforeIteration?: boolean;
};
declare function forkEvent(event: (AnimatedEvent | null | undefined) | (((...args: any) => any) | null | undefined), listener: ((...args: any) => any)): AnimatedEvent | ((...args: any) => any);
declare function unforkEvent(event: (AnimatedEvent | null | undefined) | (((...args: any) => any) | null | undefined), listener: ((...args: any) => any)): void;
declare const _default: {
    /**
     * Standard value class for driving animations.  Typically initialized with
     * `new Animated.Value(0);`
     *
     * See http://facebook.github.io/react-native/docs/animated.html#value
     */
    Value: typeof AnimatedValue;
    /**
     * 2D value class for driving 2D animations, such as pan gestures.
     *
     * See https://facebook.github.io/react-native/docs/animatedvaluexy.html
     */
    ValueXY: typeof AnimatedValueXY;
    /**
     * Exported to use the Interpolation type in flow.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#interpolation
     */
    Interpolation: typeof AnimatedInterpolation;
    /**
     * Exported for ease of type checking. All animated values derive from this
     * class.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#node
     */
    Node: typeof AnimatedNode;
    /**
     * Animates a value from an initial velocity to zero based on a decay
     * coefficient.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#decay
     */
    decay: (value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig) => CompositeAnimation;
    /**
     * Animates a value along a timed easing curve. The Easing module has tons of
     * predefined curves, or you can use your own function.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#timing
     */
    timing: (value: AnimatedValue | AnimatedValueXY, config: TimingAnimationConfig) => CompositeAnimation;
    /**
     * Animates a value according to an analytical spring model based on
     * damped harmonic oscillation.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#spring
     */
    spring: (value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig) => CompositeAnimation;
    /**
     * Creates a new Animated value composed from two Animated values added
     * together.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#add
     */
    add: (a: number | AnimatedNode, b: number | AnimatedNode) => AnimatedAddition;
    /**
     * Creates a new Animated value composed by subtracting the second Animated
     * value from the first Animated value.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#subtract
     */
    subtract: (a: number | AnimatedNode, b: number | AnimatedNode) => AnimatedSubtraction;
    /**
     * Creates a new Animated value composed by dividing the first Animated value
     * by the second Animated value.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#divide
     */
    divide: (a: number | AnimatedNode, b: number | AnimatedNode) => AnimatedDivision;
    /**
     * Creates a new Animated value composed from two Animated values multiplied
     * together.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#multiply
     */
    multiply: (a: number | AnimatedNode, b: number | AnimatedNode) => AnimatedMultiplication;
    /**
     * Creates a new Animated value that is the (non-negative) modulo of the
     * provided Animated value.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#modulo
     */
    modulo: (a: AnimatedNode, modulus: number) => AnimatedModulo;
    /**
     * Create a new Animated value that is limited between 2 values. It uses the
     * difference between the last value so even if the value is far from the
     * bounds it will start changing when the value starts getting closer again.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#diffclamp
     */
    diffClamp: (a: AnimatedNode, min: number, max: number) => AnimatedDiffClamp;
    /**
     * Starts an animation after the given delay.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#delay
     */
    delay: (time: number) => CompositeAnimation;
    /**
     * Starts an array of animations in order, waiting for each to complete
     * before starting the next. If the current running animation is stopped, no
     * following animations will be started.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#sequence
     */
    sequence: (animations: CompositeAnimation[]) => CompositeAnimation;
    /**
     * Starts an array of animations all at the same time. By default, if one
     * of the animations is stopped, they will all be stopped. You can override
     * this with the `stopTogether` flag.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#parallel
     */
    parallel: (animations: CompositeAnimation[], config?: ParallelConfig | null | undefined) => CompositeAnimation;
    /**
     * Array of animations may run in parallel (overlap), but are started in
     * sequence with successive delays.  Nice for doing trailing effects.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#stagger
     */
    stagger: (time: number, animations: CompositeAnimation[]) => CompositeAnimation;
    /**
     * Loops a given animation continuously, so that each time it reaches the
     * end, it resets and begins again from the start.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#loop
     */
    loop: (animation: CompositeAnimation, { iterations, resetBeforeIteration }?: LoopAnimationConfig) => CompositeAnimation;
    /**
     * Takes an array of mappings and extracts values from each arg accordingly,
     * then calls `setValue` on the mapped outputs.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#event
     */
    event: (argMapping: (AnimatedValue | {
        [key: string]: Mapping;
    } | null | undefined)[], config: EventConfig) => any;
    /**
     * Make any React component Animatable.  Used to create `Animated.View`, etc.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#createanimatedcomponent
     */
    createAnimatedComponent: typeof createAnimatedComponent;
    /**
     * Imperative API to attach an animated value to an event on a view. Prefer
     * using `Animated.event` with `useNativeDrive: true` if possible.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#attachnativeevent
     */
    attachNativeEvent: typeof attachNativeEvent;
    /**
     * Advanced imperative API for snooping on animated events that are passed in
     * through props. Use values directly where possible.
     *
     * See http://facebook.github.io/react-native/docs/animated.html#forkevent
     */
    forkEvent: typeof forkEvent;
    unforkEvent: typeof unforkEvent;
    /**
     * Expose Event class, so it can be used as a type for type checkers.
     */
    Event: typeof AnimatedEvent;
    __PropsOnlyForTests: typeof AnimatedProps;
};
/**
 * The `Animated` library is designed to make animations fluid, powerful, and
 * easy to build and maintain. `Animated` focuses on declarative relationships
 * between inputs and outputs, with configurable transforms in between, and
 * simple `start`/`stop` methods to control time-based animation execution.
 * If additional transforms are added, be sure to include them in
 * AnimatedMock.js as well.
 *
 * See http://facebook.github.io/react-native/docs/animated.html
 */
export default _default;
