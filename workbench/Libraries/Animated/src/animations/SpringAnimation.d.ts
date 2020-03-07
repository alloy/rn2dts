const AnimatedValue = require("../nodes/AnimatedValue");
const AnimatedValueXY = require("../nodes/AnimatedValueXY");
const AnimatedInterpolation = require("../nodes/AnimatedInterpolation");
const Animation = require("./Animation");

import { AnimationConfig } from "./Animation";
import { EndCallback } from "./Animation";

type SpringAnimationConfig = AnimationConfig & {
  toValue: number | AnimatedValue | {x: number;y: number;} | AnimatedValueXY | AnimatedInterpolation;
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
  velocity?: number | {x: number;y: number;};
  bounciness?: number;
  speed?: number;
  tension?: number;
  friction?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  delay?: number;
};

type SpringAnimationConfigSingle = AnimationConfig & {
  toValue: number | AnimatedValue | AnimatedInterpolation;
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
  constructor(config: SpringAnimationConfigSingle): void;
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
    type: string;
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
export { SpringAnimationConfig };

export { SpringAnimationConfigSingle };

declare module.exports: typeof SpringAnimation