import { TurboModule } from "../../TurboModule/RCTExport";

type EndResult = {finished: boolean;};
type EndCallback = ((result: EndResult) => void);

type EventMapping = {
  nativeEventPath: Array<string>;
  animatedValueTag: number | null | undefined;
};

type AnimatedNodeConfig = any;
type AnimatingNodeConfig = any;

interface Spec extends TurboModule {
  readonly createAnimatedNode: ((tag: number, config: AnimatedNodeConfig) => void);
  readonly startListeningToAnimatedNodeValue: ((tag: number) => void);
  readonly stopListeningToAnimatedNodeValue: ((tag: number) => void);
  readonly connectAnimatedNodes: ((parentTag: number, childTag: number) => void);
  readonly disconnectAnimatedNodes: ((parentTag: number, childTag: number) => void);
  readonly startAnimatingNode: ((animationId: number, nodeTag: number, config: AnimatingNodeConfig, endCallback: EndCallback) => void);
  readonly stopAnimation: ((animationId: number) => void);
  readonly setAnimatedNodeValue: ((nodeTag: number, value: number) => void);
  readonly setAnimatedNodeOffset: ((nodeTag: number, offset: number) => void);
  readonly flattenAnimatedNodeOffset: ((nodeTag: number) => void);
  readonly extractAnimatedNodeOffset: ((nodeTag: number) => void);
  readonly connectAnimatedNodeToView: ((nodeTag: number, viewTag: number) => void);
  readonly disconnectAnimatedNodeFromView: ((nodeTag: number, viewTag: number) => void);
  readonly restoreDefaultValues: ((nodeTag: number) => void);
  readonly dropAnimatedNode: ((tag: number) => void);
  readonly addAnimatedEventToView: ((viewTag: number, eventName: string, eventMapping: EventMapping) => void);
  readonly removeAnimatedEventFromView: ((viewTag: number, eventName: string, animatedNodeTag: number) => void);
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}
export { EventMapping };

export { AnimatedNodeConfig };
export { AnimatingNodeConfig };

export { Spec };

export default Spec | null | undefined;