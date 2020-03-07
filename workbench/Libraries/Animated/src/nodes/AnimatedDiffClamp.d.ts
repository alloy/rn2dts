const AnimatedInterpolation = require("./AnimatedInterpolation");
const AnimatedNode = require("./AnimatedNode");
const AnimatedWithChildren = require("./AnimatedWithChildren");

import { InterpolationConfigType } from "./AnimatedInterpolation";

declare class AnimatedDiffClamp extends AnimatedWithChildren {
  constructor(a: AnimatedNode, min: number, max: number): void;
  __makeNative(): void;
  interpolate(config: InterpolationConfigType): AnimatedInterpolation;
  __getValue(): number;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}

declare module.exports: typeof AnimatedDiffClamp