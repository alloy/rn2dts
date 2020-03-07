import NativeEventEmitter from "../../EventEmitter/NativeEventEmitter";
import { EventConfig } from "./AnimatedEvent";

import { EventMapping } from "./NativeAnimatedModule";
import { AnimatedNodeConfig } from "./NativeAnimatedModule";
import { AnimatingNodeConfig } from "./NativeAnimatedModule";
import { AnimationConfig } from "./animations/Animation";
import { EndCallback } from "./animations/Animation";
import { InterpolationConfigType } from "./nodes/AnimatedInterpolation";

declare var API: {
  enableQueue: (() => void);
  disableQueue: (() => void);
  createAnimatedNode: ((tag: number, config: AnimatedNodeConfig) => void);
  startListeningToAnimatedNodeValue: ((tag: number) => void);
  stopListeningToAnimatedNodeValue: ((tag: number) => void);
  connectAnimatedNodes: ((parentTag: number, childTag: number) => void);
  disconnectAnimatedNodes: ((parentTag: number, childTag: number) => void);
  startAnimatingNode: ((animationId: number, nodeTag: number, config: AnimatingNodeConfig, endCallback: EndCallback) => void);
  stopAnimation: ((animationId: number) => void);
  setAnimatedNodeValue: ((nodeTag: number, value: number) => void);
  setAnimatedNodeOffset: ((nodeTag: number, offset: number) => void);
  flattenAnimatedNodeOffset: ((nodeTag: number) => void);
  extractAnimatedNodeOffset: ((nodeTag: number) => void);
  connectAnimatedNodeToView: ((nodeTag: number, viewTag: number) => void);
  disconnectAnimatedNodeFromView: ((nodeTag: number, viewTag: number) => void);
  restoreDefaultValues: ((nodeTag: number) => void);
  dropAnimatedNode: ((tag: number) => void);
  addAnimatedEventToView: ((viewTag: number, eventName: string, eventMapping: EventMapping) => void);
  removeAnimatedEventFromView(viewTag: number, eventName: string, animatedNodeTag: number): void;
};

declare function addWhitelistedStyleProp(prop: string): void;

declare function addWhitelistedTransformProp(prop: string): void;

declare function addWhitelistedInterpolationParam(param: string): void;

declare function validateTransform(configs: Array<{type: "animated";property: string;nodeTag: number | null | undefined;} | {type: "static";property: string;value: number | string;}>): void;

declare function validateStyles(styles: {
  [key: string]: number | null | undefined;
}): void;

declare function validateInterpolation(config: InterpolationConfigType): void;

declare function generateNewNodeTag(): number;

declare function generateNewAnimationId(): number;

declare function assertNativeAnimatedModule(): void;

declare function shouldUseNativeDriver(config: (AnimationConfig) | EventConfig): boolean;

declare function transformDataType(value: number | string): number | string;

declare module.exports: {
  API: typeof API;
  addWhitelistedStyleProp: typeof addWhitelistedStyleProp;
  addWhitelistedTransformProp: typeof addWhitelistedTransformProp;
  addWhitelistedInterpolationParam: typeof addWhitelistedInterpolationParam;
  validateStyles: typeof validateStyles;
  validateTransform: typeof validateTransform;
  validateInterpolation: typeof validateInterpolation;
  generateNewNodeTag: typeof generateNewNodeTag;
  generateNewAnimationId: typeof generateNewAnimationId;
  assertNativeAnimatedModule: typeof assertNativeAnimatedModule;
  shouldUseNativeDriver: typeof shouldUseNativeDriver;
  transformDataType: typeof transformDataType;
  nativeEventEmitter(): NativeEventEmitter;
}