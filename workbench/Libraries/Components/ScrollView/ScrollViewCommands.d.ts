import * as React from "react";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type ScrollViewNativeComponentType = HostComponent<unknown>;
interface NativeCommands {
  readonly flashScrollIndicators: ((viewRef: React.ElementRef<ScrollViewNativeComponentType>) => void);
  readonly scrollTo: ((viewRef: React.ElementRef<ScrollViewNativeComponentType>, x: Double, y: Double, animated: boolean) => void);
  readonly scrollToEnd: ((viewRef: React.ElementRef<ScrollViewNativeComponentType>, animated: boolean) => void);
  readonly zoomToRect: ((viewRef: React.ElementRef<ScrollViewNativeComponentType>, rect: {
    x: Double;
    y: Double;
    width: Double;
    height: Double;
    animated?: boolean;
  }, animated?: boolean) => void);
}

export default NativeCommands;