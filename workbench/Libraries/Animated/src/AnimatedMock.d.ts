const {
  AnimatedEvent
} = require("./AnimatedEvent");
const {
  attachNativeEvent
} = require("./AnimatedEvent");
const AnimatedImplementation = require("./AnimatedImplementation");
const AnimatedInterpolation = require("./nodes/AnimatedInterpolation");
const AnimatedNode = require("./nodes/AnimatedNode");
const AnimatedProps = require("./nodes/AnimatedProps");
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

declare var spring: ((value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig) => CompositeAnimation);

declare var timing: ((value: AnimatedValue | AnimatedValueXY, config: TimingAnimationConfig) => CompositeAnimation);

declare var decay: ((value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig) => CompositeAnimation);

declare var sequence: ((animations: Array<CompositeAnimation>) => CompositeAnimation);

type ParallelConfig = {stopTogether?: boolean;};
declare var parallel: ((animations: Array<CompositeAnimation>, config?: ParallelConfig | null | undefined) => CompositeAnimation);

declare var delay: ((time: number) => CompositeAnimation);

declare var stagger: ((time: number, animations: Array<CompositeAnimation>) => CompositeAnimation);

type LoopAnimationConfig = {
  iterations: number;
  resetBeforeIteration?: boolean;

};

declare var loop: ((animation: CompositeAnimation, _?: LoopAnimationConfig) => CompositeAnimation);

declare var event: ((argMapping: Array<Mapping | null | undefined>, config: EventConfig) => any);
export { CompositeAnimation };

declare module.exports: {
  Value: typeof AnimatedValue;
  ValueXY: typeof AnimatedValueXY;
  Interpolation: typeof AnimatedInterpolation;
  Node: typeof AnimatedNode;
  decay: typeof decay;
  timing: typeof timing;
  spring: typeof spring;
  add: typeof AnimatedImplementation.add;
  subtract: typeof AnimatedImplementation.subtract;
  divide: typeof AnimatedImplementation.divide;
  multiply: typeof AnimatedImplementation.multiply;
  modulo: typeof AnimatedImplementation.modulo;
  diffClamp: typeof AnimatedImplementation.diffClamp;
  delay: typeof delay;
  sequence: typeof sequence;
  parallel: typeof parallel;
  stagger: typeof stagger;
  loop: typeof loop;
  event: typeof event;
  createAnimatedComponent: typeof createAnimatedComponent;
  attachNativeEvent: typeof attachNativeEvent;
  forkEvent: typeof AnimatedImplementation.forkEvent;
  unforkEvent: typeof AnimatedImplementation.unforkEvent;
  Event: typeof AnimatedEvent;
  __PropsOnlyForTests: typeof AnimatedProps;
}