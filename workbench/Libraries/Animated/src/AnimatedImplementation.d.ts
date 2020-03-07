const {
  AnimatedEvent
} = require("./AnimatedEvent");
const {
  attachNativeEvent
} = require("./AnimatedEvent");
const AnimatedAddition = require("./nodes/AnimatedAddition");
const AnimatedDiffClamp = require("./nodes/AnimatedDiffClamp");
const AnimatedDivision = require("./nodes/AnimatedDivision");
const AnimatedInterpolation = require("./nodes/AnimatedInterpolation");
const AnimatedModulo = require("./nodes/AnimatedModulo");
const AnimatedMultiplication = require("./nodes/AnimatedMultiplication");
const AnimatedNode = require("./nodes/AnimatedNode");
const AnimatedProps = require("./nodes/AnimatedProps");
const AnimatedSubtraction = require("./nodes/AnimatedSubtraction");

const AnimatedValue = require("./nodes/AnimatedValue");
const AnimatedValueXY = require("./nodes/AnimatedValueXY");

const createAnimatedComponent = require("./createAnimatedComponent");

import { EndCallback } from "./animations/Animation";
import { TimingAnimationConfig } from "./animations/TimingAnimation";
import { DecayAnimationConfig } from "./animations/DecayAnimation";
import { SpringAnimationConfig } from "./animations/SpringAnimation";
import { Mapping } from "./AnimatedEvent";
import { EventConfig } from "./AnimatedEvent";

type CompositeAnimation = {
  start: ((callback?: EndCallback | null | undefined) => void);
  stop: (() => void);
  reset: (() => void);
  _startNativeLoop: ((iterations?: number) => void);
  _isUsingNativeDriver: (() => boolean);

};

declare var add: ((a: AnimatedNode | number, b: AnimatedNode | number) => AnimatedAddition);

declare var subtract: ((a: AnimatedNode | number, b: AnimatedNode | number) => AnimatedSubtraction);

declare var divide: ((a: AnimatedNode | number, b: AnimatedNode | number) => AnimatedDivision);

declare var multiply: ((a: AnimatedNode | number, b: AnimatedNode | number) => AnimatedMultiplication);

declare var modulo: ((a: AnimatedNode, modulus: number) => AnimatedModulo);

declare var diffClamp: ((a: AnimatedNode, min: number, max: number) => AnimatedDiffClamp);

declare var spring: ((value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig) => CompositeAnimation);

declare var timing: ((value: AnimatedValue | AnimatedValueXY, config: TimingAnimationConfig) => CompositeAnimation);

declare var decay: ((value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig) => CompositeAnimation);

declare var sequence: ((animations: Array<CompositeAnimation>) => CompositeAnimation);

type ParallelConfig = {
  // If one is stopped, stop all.  default: true
  stopTogether?: boolean;

};
declare var parallel: ((animations: Array<CompositeAnimation>, config?: ParallelConfig | null | undefined) => CompositeAnimation);

declare var delay: ((time: number) => CompositeAnimation);

declare var stagger: ((time: number, animations: Array<CompositeAnimation>) => CompositeAnimation);

type LoopAnimationConfig = {
  iterations: number;
  resetBeforeIteration?: boolean;

};

declare var loop: ((animation: CompositeAnimation, _?: LoopAnimationConfig) => CompositeAnimation);

declare function forkEvent(event: (AnimatedEvent | null | undefined) | (((...args: any) => any) | null | undefined), listener: ((...args: any) => any)): AnimatedEvent | ((...args: any) => any);

declare function unforkEvent(event: (AnimatedEvent | null | undefined) | (((...args: any) => any) | null | undefined), listener: ((...args: any) => any)): void;

declare var event: ((argMapping: ReadonlyArray<Mapping | null | undefined>, config: EventConfig) => any);
export { CompositeAnimation };

declare module.exports: {

  /**
     * Standard value class for driving animations.  Typically initialized with
     * `new Animated.Value(0);`
     *
     * See https://reactnative.dev/docs/animated.html#value
     */
  Value: typeof AnimatedValue;

  /**
     * 2D value class for driving 2D animations, such as pan gestures.
     *
     * See https://reactnative.dev/docs/animatedvaluexy.html
     */
  ValueXY: typeof AnimatedValueXY;

  /**
     * Exported to use the Interpolation type in flow.
     *
     * See https://reactnative.dev/docs/animated.html#interpolation
     */
  Interpolation: typeof AnimatedInterpolation;

  /**
     * Exported for ease of type checking. All animated values derive from this
     * class.
     *
     * See https://reactnative.dev/docs/animated.html#node
     */
  Node: typeof AnimatedNode;

  /**
     * Animates a value from an initial velocity to zero based on a decay
     * coefficient.
     *
     * See https://reactnative.dev/docs/animated.html#decay
     */
  decay: typeof decay;

  /**
     * Animates a value along a timed easing curve. The Easing module has tons of
     * predefined curves, or you can use your own function.
     *
     * See https://reactnative.dev/docs/animated.html#timing
     */
  timing: typeof timing;

  /**
     * Animates a value according to an analytical spring model based on
     * damped harmonic oscillation.
     *
     * See https://reactnative.dev/docs/animated.html#spring
     */
  spring: typeof spring;

  /**
     * Creates a new Animated value composed from two Animated values added
     * together.
     *
     * See https://reactnative.dev/docs/animated.html#add
     */
  add: typeof add;

  /**
     * Creates a new Animated value composed by subtracting the second Animated
     * value from the first Animated value.
     *
     * See https://reactnative.dev/docs/animated.html#subtract
     */
  subtract: typeof subtract;

  /**
     * Creates a new Animated value composed by dividing the first Animated value
     * by the second Animated value.
     *
     * See https://reactnative.dev/docs/animated.html#divide
     */
  divide: typeof divide;

  /**
     * Creates a new Animated value composed from two Animated values multiplied
     * together.
     *
     * See https://reactnative.dev/docs/animated.html#multiply
     */
  multiply: typeof multiply;

  /**
     * Creates a new Animated value that is the (non-negative) modulo of the
     * provided Animated value.
     *
     * See https://reactnative.dev/docs/animated.html#modulo
     */
  modulo: typeof modulo;

  /**
     * Create a new Animated value that is limited between 2 values. It uses the
     * difference between the last value so even if the value is far from the
     * bounds it will start changing when the value starts getting closer again.
     *
     * See https://reactnative.dev/docs/animated.html#diffclamp
     */
  diffClamp: typeof diffClamp;

  /**
     * Starts an animation after the given delay.
     *
     * See https://reactnative.dev/docs/animated.html#delay
     */
  delay: typeof delay;

  /**
     * Starts an array of animations in order, waiting for each to complete
     * before starting the next. If the current running animation is stopped, no
     * following animations will be started.
     *
     * See https://reactnative.dev/docs/animated.html#sequence
     */
  sequence: typeof sequence;

  /**
     * Starts an array of animations all at the same time. By default, if one
     * of the animations is stopped, they will all be stopped. You can override
     * this with the `stopTogether` flag.
     *
     * See https://reactnative.dev/docs/animated.html#parallel
     */
  parallel: typeof parallel;

  /**
     * Array of animations may run in parallel (overlap), but are started in
     * sequence with successive delays.  Nice for doing trailing effects.
     *
     * See https://reactnative.dev/docs/animated.html#stagger
     */
  stagger: typeof stagger;

  /**
     * Loops a given animation continuously, so that each time it reaches the
     * end, it resets and begins again from the start.
     *
     * See https://reactnative.dev/docs/animated.html#loop
     */
  loop: typeof loop;

  /**
     * Takes an array of mappings and extracts values from each arg accordingly,
     * then calls `setValue` on the mapped outputs.
     *
     * See https://reactnative.dev/docs/animated.html#event
     */
  event: typeof event;

  /**
     * Make any React component Animatable.  Used to create `Animated.View`, etc.
     *
     * See https://reactnative.dev/docs/animated.html#createanimatedcomponent
     */
  createAnimatedComponent: typeof createAnimatedComponent;

  /**
     * Imperative API to attach an animated value to an event on a view. Prefer
     * using `Animated.event` with `useNativeDrive: true` if possible.
     *
     * See https://reactnative.dev/docs/animated.html#attachnativeevent
     */
  attachNativeEvent: typeof attachNativeEvent;

  /**
     * Advanced imperative API for snooping on animated events that are passed in
     * through props. Use values directly where possible.
     *
     * See https://reactnative.dev/docs/animated.html#forkevent
     */
  forkEvent: typeof forkEvent;
  unforkEvent: typeof unforkEvent;

  /**
     * Expose Event class, so it can be used as a type for type checkers.
     */
  Event: typeof AnimatedEvent;
  __PropsOnlyForTests: typeof AnimatedProps;
}