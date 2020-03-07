const AnimatedInterpolation = require("./AnimatedInterpolation");
const AnimatedNode = require("./AnimatedNode");
const AnimatedWithChildren = require("./AnimatedWithChildren");

import { InterpolationConfigType } from "./AnimatedInterpolation";

declare class AnimatedModulo extends AnimatedWithChildren {
  constructor(a: AnimatedNode, modulus: number): void;
  __makeNative(): void;
  __getValue(): number;
  interpolate(config: InterpolationConfigType): AnimatedInterpolation;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}

declare module.exports: typeof AnimatedModulo