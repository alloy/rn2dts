import { UniqueBranding } from "flow-builtin-types";
import { $PropertyType } from "utility-types";
import * as React from "react";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";

type SyntheticEvent<T> = UniqueBranding & Readonly<{
  bubbles: boolean | null | undefined;
  cancelable: boolean | null | undefined;
  currentTarget: number | React.ElementRef<HostComponent<unknown>>;
  defaultPrevented: boolean | null | undefined;
  dispatchConfig: UniqueBranding & Readonly<{registrationName: string;}>;
  eventPhase: number | null | undefined;
  preventDefault: (() => void);
  isDefaultPrevented: (() => boolean);
  stopPropagation: (() => void);
  isPropagationStopped: (() => boolean);
  isTrusted: boolean | null | undefined;
  nativeEvent: T;
  persist: (() => void);
  target: (number | null | undefined) | React.ElementRef<HostComponent<unknown>>;
  timeStamp: number;
  type: string | null | undefined;
}>;

type ResponderSyntheticEvent<T> = UniqueBranding & Readonly<React.SyntheticEvent<T> & {
  touchHistory: UniqueBranding & Readonly<{
    indexOfSingleActiveTouch: number;
    mostRecentTimeStamp: number;
    numberActiveTouches: number;
    touchBank: ReadonlyArray<UniqueBranding & Readonly<{
      touchActive: boolean;
      startPageX: number;
      startPageY: number;
      startTimeStamp: number;
      currentPageX: number;
      currentPageY: number;
      currentTimeStamp: number;
      previousPageX: number;
      previousPageY: number;
      previousTimeStamp: number;
    }>>;
  }>;
}>;

type Layout = UniqueBranding & Readonly<{x: number;y: number;width: number;height: number;}>;

type TextLayout = UniqueBranding & Readonly<Layout & {
  ascender: number;
  capHeight: number;
  descender: number;
  text: string;
  xHeight: number;
}>;

type LayoutEvent = React.SyntheticEvent<UniqueBranding & Readonly<{layout: Layout;}>>;

type TextLayoutEvent = React.SyntheticEvent<UniqueBranding & Readonly<{lines: Array<TextLayout>;}>>;

type PressEvent = ResponderSyntheticEvent<UniqueBranding & Readonly<{
  changedTouches: ReadonlyArray<$PropertyType<PressEvent, "nativeEvent">>;
  force: number;
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  target: number | null | undefined;
  timestamp: number;
  touches: ReadonlyArray<$PropertyType<PressEvent, "nativeEvent">>;
}>>;

type ScrollEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
  contentInset: UniqueBranding & Readonly<{bottom: number;left: number;right: number;top: number;}>;
  contentOffset: UniqueBranding & Readonly<{y: number;x: number;}>;
  contentSize: UniqueBranding & Readonly<{height: number;width: number;}>;
  layoutMeasurement: UniqueBranding & Readonly<{height: number;width: number;}>;
  targetContentOffset?: UniqueBranding & Readonly<{y: number;x: number;}>;
  velocity?: UniqueBranding & Readonly<{y: number;x: number;}>;
  zoomScale?: number;
  responderIgnoreScroll?: boolean;
}>>;

type BlurEvent = React.SyntheticEvent<UniqueBranding & Readonly<{target: number;}>>;

type FocusEvent = React.SyntheticEvent<UniqueBranding & Readonly<{target: number;}>>;

type MouseEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  timestamp: number;
}>>;
export { SyntheticEvent };

export { ResponderSyntheticEvent };

export { Layout };

export { TextLayout };

export { LayoutEvent };

export { TextLayoutEvent };

export { PressEvent };

export { ScrollEvent };

export { BlurEvent };

export { FocusEvent };

export { MouseEvent };