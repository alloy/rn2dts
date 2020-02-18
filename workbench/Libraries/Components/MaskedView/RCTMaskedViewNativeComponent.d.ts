/// <reference types="react" />
import { UniqueBranding } from "flow-builtin-types";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
import { ViewProps } from "../View/ViewPropTypes";
declare type NativeProps = UniqueBranding & Readonly<ViewProps>;
declare const _default: import("react").AbstractComponent<NativeProps, UniqueBranding & Readonly<import("../../Renderer/shims/ReactNativeTypes").NativeMethods>>;
export default _default;
