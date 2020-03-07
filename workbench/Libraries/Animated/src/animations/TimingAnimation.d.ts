const AnimatedValue = require("../nodes/AnimatedValue");
const AnimatedValueXY = require("../nodes/AnimatedValueXY");
const AnimatedInterpolation = require("../nodes/AnimatedInterpolation");
const Animation = require("./Animation");

import { AnimationConfig } from "./Animation";
import { EndCallback } from "./Animation";

type TimingAnimationConfig = AnimationConfig & {
  toValue: number | AnimatedValue | {x: number;y: number;} | AnimatedValueXY | AnimatedInterpolation;
  easing?: ((value: number) => number);
  duration?: number;
  delay?: number;
};

type TimingAnimationConfigSingle = AnimationConfig & {
  toValue: number | AnimatedValue | AnimatedInterpolation;
  easing?: ((value: number) => number);
  duration?: number;
  delay?: number;
};

declare class TimingAnimation extends Animation {
  constructor(config: TimingAnimationConfigSingle): void;
  __getNativeAnimationConfig(): any;
  start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
  onUpdate(): void;
  stop(): void;
}
export { TimingAnimationConfig };

export { TimingAnimationConfigSingle };

declare module.exports: typeof TimingAnimation