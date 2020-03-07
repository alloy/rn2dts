const AnimatedValue = require("./AnimatedValue");
const AnimatedNode = require("./AnimatedNode");

import { EndCallback } from "../animations/Animation";

declare class AnimatedTracking extends AnimatedNode {
  constructor(value: AnimatedValue, parent: AnimatedNode, animationClass: any, animationConfig: any, callback?: EndCallback | null | undefined): void;
  __makeNative(): void;
  __getValue(): any;
  __attach(): void;
  __detach(): void;
  update(): void;
  __getNativeConfig(): any;
}

declare module.exports: typeof AnimatedTracking