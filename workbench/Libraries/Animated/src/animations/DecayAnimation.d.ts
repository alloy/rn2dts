const Animation = require("./Animation");

import AnimatedValue from "../nodes/AnimatedValue";
import { AnimationConfig } from "./Animation";
import { EndCallback } from "./Animation";

type DecayAnimationConfig = AnimationConfig & {
  velocity: number | {x: number;y: number;};
  deceleration?: number;
};

type DecayAnimationConfigSingle = AnimationConfig & {
  velocity: number;
  deceleration?: number;
};

declare class DecayAnimation extends Animation {
  constructor(config: DecayAnimationConfigSingle): void;
  __getNativeAnimationConfig(): {
    deceleration: number;
    iterations: number;
    type: string;
    velocity: number;
  };
  start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
  onUpdate(): void;
  stop(): void;
}
export { DecayAnimationConfig };

export { DecayAnimationConfigSingle };

declare module.exports: typeof DecayAnimation