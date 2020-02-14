import { TurboModule } from "../../TurboModule/RCTExport";
declare type EndResult = {
    finished: boolean;
};
declare type EndCallback = ((result: EndResult) => void);
export declare type EventMapping = {
    nativeEventPath: Array<string>;
    animatedValueTag: number | null | undefined;
};
export declare type AnimatedNodeConfig = {
    type: string;
};
export declare type AnimatingNodeConfig = {
    type: string;
};
export interface Spec extends TurboModule {
    readonly createAnimatedNode: ((tag: number | null | undefined, config: AnimatedNodeConfig) => void);
    readonly startListeningToAnimatedNodeValue: ((tag: number | null | undefined) => void);
    readonly stopListeningToAnimatedNodeValue: ((tag: number | null | undefined) => void);
    readonly connectAnimatedNodes: ((parentTag: number | null | undefined, childTag: number | null | undefined) => void);
    readonly disconnectAnimatedNodes: ((parentTag: number | null | undefined, childTag: number | null | undefined) => void);
    readonly startAnimatingNode: ((animationId: number | null | undefined, nodeTag: number | null | undefined, config: AnimatingNodeConfig, endCallback: EndCallback) => void);
    readonly stopAnimation: ((animationId: number | null | undefined) => void);
    readonly setAnimatedNodeValue: ((nodeTag: number | null | undefined, value: number | null | undefined) => void);
    readonly setAnimatedNodeOffset: ((nodeTag: number | null | undefined, offset: number | null | undefined) => void);
    readonly flattenAnimatedNodeOffset: ((nodeTag: number | null | undefined) => void);
    readonly extractAnimatedNodeOffset: ((nodeTag: number | null | undefined) => void);
    readonly connectAnimatedNodeToView: ((nodeTag: number | null | undefined, viewTag: number | null | undefined) => void);
    readonly disconnectAnimatedNodeFromView: ((nodeTag: number | null | undefined, viewTag: number | null | undefined) => void);
    readonly dropAnimatedNode: ((tag: number | null | undefined) => void);
    readonly addAnimatedEventToView: ((viewTag: number | null | undefined, eventName: string, eventMapping: EventMapping) => void);
    readonly removeAnimatedEventFromView: ((viewTag: number | null | undefined, eventName: string, animatedNodeTag: number | null | undefined) => void);
    readonly addListener: ((eventName: string) => void);
    readonly removeListeners: ((count: number) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
