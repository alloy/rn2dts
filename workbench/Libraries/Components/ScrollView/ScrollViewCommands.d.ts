/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
import * as React from "react";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ScrollViewNativeComponentType = HostComponent<unknown>;
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
declare const _default: NativeCommands;
export default _default;
