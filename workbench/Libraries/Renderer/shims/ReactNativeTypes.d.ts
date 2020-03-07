import { UniqueBranding, React$Element } from "flow-builtin-types";
import { ElementRef } from "react";
import { AbstractComponent } from "react";

type MeasureOnSuccessCallback = ((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void);

type MeasureInWindowOnSuccessCallback = ((x: number, y: number, width: number, height: number) => void);

type MeasureLayoutOnSuccessCallback = ((left: number, top: number, width: number, height: number) => void);

type AttributeType = true | (UniqueBranding & Readonly<{diff?: (<T>(arg1: T, arg2: T) => boolean);process?: ((arg1: any) => any);}>);

type AttributeConfiguration<TProps = string, TStyleProps = string> = UniqueBranding & Readonly<{

  style: UniqueBranding & Readonly<{
    [propName: TStyleProps]: AttributeType;
  }>;

  [propName: TProps]: AttributeType;}>;

type ReactNativeBaseComponentViewConfig<TProps = string, TStyleProps = string> = UniqueBranding & Readonly<{
  baseModuleName?: string;
  bubblingEventTypes?: UniqueBranding & Readonly<{
    [eventName: string]: UniqueBranding & Readonly<{
      phasedRegistrationNames: UniqueBranding & Readonly<{captured: string;bubbled: string;}>;
    }>;
  }>;
  Commands?: UniqueBranding & Readonly<{
    [commandName: string]: number;
  }>;
  directEventTypes?: UniqueBranding & Readonly<{
    [eventName: string]: UniqueBranding & Readonly<{registrationName: string;}>;
  }>;
  NativeProps?: UniqueBranding & Readonly<{
    [propName: string]: string;
  }>;
  uiViewClassName: string;
  validAttributes: AttributeConfiguration<TProps, TStyleProps>;
}>;

type ViewConfigGetter = (() => ReactNativeBaseComponentViewConfig<>);

type NativeMethods = {
  blur(): void;
  focus(): void;
  measure(callback: MeasureOnSuccessCallback): void;
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  measureLayout(relativeToNativeNode: number | ElementRef<HostComponent<unknown>>, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: (() => void)): void;
  setNativeProps(nativeProps: any): void;

};

type HostComponent<T> = AbstractComponent<T, UniqueBranding & Readonly<NativeMethods>>;

type SecretInternalsType = {
  computeComponentStackForErrorReporting(tag: number): string;

};

type SecretInternalsFabricType = {};

type ReactNativeType = {
  findHostInstance_DEPRECATED(componentOrHandle: any): ElementRef<HostComponent<unknown>> | null | undefined;
  findNodeHandle(componentOrHandle: any): number | null | undefined;
  dispatchCommand(handle: any, command: string, args: Array<any>): void;
  render(element: React$Element<any>, containerTag: any, callback: ((...args: any) => any) | null | undefined): any;
  unmountComponentAtNode(containerTag: number): any;
  unmountComponentAtNodeAndRemoveContainer(containerTag: number): any;
  // TODO (bvaughn) Add types
  unstable_batchedUpdates: any;
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsType;

};

type ReactFabricType = {
  findHostInstance_DEPRECATED(componentOrHandle: any): HostComponent<unknown> | null | undefined;
  findNodeHandle(componentOrHandle: any): number | null | undefined;
  dispatchCommand(handle: any, command: string, args: Array<any>): void;
  render(element: React$Element<any>, containerTag: any, callback: ((...args: any) => any) | null | undefined): any;
  unmountComponentAtNode(containerTag: number): any;
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsFabricType;

};

type ReactNativeEventTarget = {
  node: any;
  canonical: {
    _nativeTag: number;
    viewConfig: ReactNativeBaseComponentViewConfig<>;
    currentProps: any;
    _internalInstanceHandle: any;

  };

};

type ReactFaricEventTouch = {
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  target: number;
  timestamp: number;
  force: number;

};

type ReactFaricEvent = {
  touches: Array<ReactFaricEventTouch>;
  changedTouches: Array<ReactFaricEventTouch>;
  targetTouches: Array<ReactFaricEventTouch>;
  target: number;

};
export { MeasureOnSuccessCallback };

export { MeasureInWindowOnSuccessCallback };

export { MeasureLayoutOnSuccessCallback };

export { AttributeConfiguration };

export { ReactNativeBaseComponentViewConfig };

export { ViewConfigGetter };

export { NativeMethods };

export { HostComponent };

export { ReactNativeType };

export { ReactFabricType };

export { ReactNativeEventTarget };

export { ReactFaricEventTouch };

export { ReactFaricEvent };