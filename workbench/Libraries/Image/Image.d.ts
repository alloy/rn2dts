import React from 'react';
import resolveAssetSource from './resolveAssetSource';
import { UniqueBranding } from "flow-builtin-types";
import { ImageProps as ImagePropsType } from "./ImageProps";
declare function getSize(uri: string, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): void;
declare function getSizeWithHeaders(uri: string, headers: {
    [key: string]: string;
}, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): any;
declare function prefetch(url: string): any;
declare function queryCache(urls: Array<string>): Promise<{
    [key: string]: "memory" | "disk" | "disk/memory";
}>;
declare const _default: ((new (props: ImagePropsType, context?: any) => UniqueBranding & Readonly<import("../Renderer/shims/ReactNativeTypes").NativeMethods> & React.ComponentMethods<UniqueBranding & Readonly<Pick<import("../Components/View/ViewPropTypes").ViewProps, "children" | "onClick" | "onBlur" | "onFocus" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onAccessibilityAction" | "onAccessibilityEscape" | "onAccessibilityTap" | "onLayout" | "onMagicTap" | "hitSlop" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderEnd" | "onResponderTerminate" | "onResponderTerminationRequest" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "onMouseEnter" | "onMouseLeave" | "nativeBackgroundAndroid" | "nativeForegroundAndroid" | "renderToHardwareTextureAndroid" | "collapsable" | "needsOffscreenAlphaCompositing" | "accessibilityLiveRegion" | "importantForAccessibility" | "hasTVPreferredFocus" | "nextFocusDown" | "nextFocusForward" | "nextFocusLeft" | "nextFocusRight" | "nextFocusUp" | "focusable" | "accessibilityIgnoresInvertColors" | "accessibilityViewIsModal" | "accessibilityElementsHidden" | "shouldRasterizeIOS" | "accessible" | "accessibilityLabel" | "accessibilityHint" | "accessibilityRole" | "accessibilityState" | "accessibilityValue" | "accessibilityActions" | "testID" | "nativeID" | "pointerEvents" | "removeClippedSubviews"> & UniqueBranding & Readonly<{
    defaultSource?: number | import("./ImageSource").ImageURISource | import("./ImageSource").ImageURISource[] | null | undefined;
    onPartialLoad?: (() => void) | null | undefined;
    onProgress?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{
        loaded: number;
        total: number;
    }>, Event>) => void) | null | undefined;
}> & Readonly<{
    loadingIndicatorSource?: number | (UniqueBranding & Readonly<{
        uri: string;
    }>) | null | undefined;
    progressiveRenderingEnabled?: boolean | null | undefined;
    fadeDuration?: number | null | undefined;
}> & {
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    blurRadius?: number | null | undefined;
    capInsets?: import("../StyleSheet/EdgeInsetsPropType").EdgeInsetsProp | null | undefined;
    onError?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{
        error: string;
    }>, Event>) => void) | null | undefined;
    onLayout?: ((event: import("../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onLoad?: ((event: import("./ImageProps").ImageLoadEvent) => void) | null | undefined;
    onLoadEnd?: (() => void) | null | undefined;
    /**
     * Prefetches a remote image for later use by downloading it to the disk
     * cache.
     *
     * See https://facebook.github.io/react-native/docs/image.html#prefetch
     */
    onLoadStart?: (() => void) | null | undefined;
    resizeMethod?: "auto" | "resize" | "scale" | null | undefined;
    source?: number | import("./ImageSource").ImageURISource | import("./ImageSource").ImageURISource[] | null | undefined;
    style?: false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    height?: string | number | import("../Animated/src/nodes/AnimatedNode").default | null | undefined;
    width?: string | number | import("../Animated/src/nodes/AnimatedNode").default | null | undefined;
    resizeMode?: "repeat" | "center" | "stretch" | "contain" | "cover" | null | undefined;
    testID?: string | null | undefined;
    src?: undefined;
    children?: undefined;
} & Readonly<UniqueBranding & Readonly<{
    onBlur?: ((event: import("../Types/CoreEventTypes").BlurEvent) => unknown) | null | undefined;
    onFocus?: ((event: import("../Types/CoreEventTypes").FocusEvent) => unknown) | null | undefined;
}> & Readonly<{
    onAccessibilityAction?: ((event: import("../Components/View/ViewAccessibility").AccessibilityActionEvent) => unknown) | null | undefined;
    onAccessibilityTap?: (() => unknown) | null | undefined;
    onLayout?: ((event: import("../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onMagicTap?: (() => unknown) | null | undefined;
    onAccessibilityEscape?: (() => unknown) | null | undefined;
}> & Readonly<{
    onMoveShouldSetResponder?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onMoveShouldSetResponderCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onResponderGrant?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean | void) | null | undefined;
    onResponderMove?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderReject?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderRelease?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderStart?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderEnd?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderTerminate?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderTerminationRequest?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onStartShouldSetResponder?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onStartShouldSetResponderCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
}> & Readonly<{
    onMouseEnter?: ((event: import("../Types/CoreEventTypes").MouseEvent) => void) | undefined;
    onMouseLeave?: ((event: import("../Types/CoreEventTypes").MouseEvent) => void) | undefined;
}> & Readonly<{
    onTouchCancel?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchCancelCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchEnd?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchEndCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchMove?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchMoveCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchStart?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchStartCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
}> & Readonly<{
    nativeBackgroundAndroid?: (UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: string;
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color?: number | null | undefined;
        borderless?: boolean | null | undefined;
    }>) | null | undefined;
    nativeForegroundAndroid?: (UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: string;
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color?: number | null | undefined;
        borderless?: boolean | null | undefined;
    }>) | null | undefined;
    renderToHardwareTextureAndroid?: boolean | null | undefined;
    collapsable?: boolean | null | undefined;
    needsOffscreenAlphaCompositing?: boolean | null | undefined;
    accessibilityLiveRegion?: "none" | "assertive" | "polite" | null | undefined;
    importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | null | undefined;
    hasTVPreferredFocus?: boolean | null | undefined;
    nextFocusDown?: number | null | undefined;
    nextFocusForward?: number | null | undefined;
    nextFocusLeft?: number | null | undefined;
    nextFocusRight?: number | null | undefined;
    nextFocusUp?: number | null | undefined;
    focusable?: boolean | undefined;
    onClick?: ((event: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => unknown) | null | undefined;
}> & Readonly<{
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityViewIsModal?: boolean | null | undefined;
    accessibilityElementsHidden?: boolean | null | undefined;
    shouldRasterizeIOS?: boolean | null | undefined;
}> & {
    children?: any;
    style?: false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    accessibilityHint?: string | null | undefined;
    accessibilityRole?: "search" | "link" | "none" | "button" | "header" | "menu" | "summary" | "image" | "switch" | "text" | "checkbox" | "radio" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | null | undefined;
    accessibilityState?: import("../Components/View/ViewAccessibility").AccessibilityState | null | undefined;
    accessibilityValue?: import("../Components/View/ViewAccessibility").AccessibilityValue | null | undefined;
    accessibilityActions?: readonly import("../Components/View/ViewAccessibility").AccessibilityActionInfo[] | null | undefined;
    testID?: string | null | undefined;
    nativeID?: string | null | undefined;
    hitSlop?: import("../StyleSheet/EdgeInsetsPropType").EdgeInsetsProp | null | undefined;
    pointerEvents?: "auto" | "none" | "box-none" | "box-only" | null | undefined;
    removeClippedSubviews?: boolean | null | undefined;
}> & {
    style?: false | void | "" | import("../StyleSheet/StyleSheetTypes").____DangerouslyImpreciseStyle_Internal | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    tintColor?: string | null | undefined;
    shouldNotifyLoadEvents?: boolean | undefined;
    src?: import("./AssetSourceResolver").ResolvedAssetSource | readonly {
        uri: string;
    }[] | null | undefined;
    headers?: string | null | undefined;
    defaultSrc?: string | null | undefined;
    loadingIndicatorSrc?: string | null | undefined;
}>> & React.ComponentMethods<ImagePropsType>) & UniqueBranding & Readonly<{
    getSize: typeof getSize;
    getSizeWithHeaders: typeof getSizeWithHeaders;
    prefetch: typeof prefetch;
    queryCache: typeof queryCache;
    resolveAssetSource: typeof resolveAssetSource;
}>) | (React.FunctionComponent<ImagePropsType> & ((props: React.PropsWithChildren<ImagePropsType>, context?: any) => (UniqueBranding & Readonly<import("../Renderer/shims/ReactNativeTypes").NativeMethods> & React.ComponentMethods<UniqueBranding & Readonly<Pick<import("../Components/View/ViewPropTypes").ViewProps, "children" | "onClick" | "onBlur" | "onFocus" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onAccessibilityAction" | "onAccessibilityEscape" | "onAccessibilityTap" | "onLayout" | "onMagicTap" | "hitSlop" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderEnd" | "onResponderTerminate" | "onResponderTerminationRequest" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "onMouseEnter" | "onMouseLeave" | "nativeBackgroundAndroid" | "nativeForegroundAndroid" | "renderToHardwareTextureAndroid" | "collapsable" | "needsOffscreenAlphaCompositing" | "accessibilityLiveRegion" | "importantForAccessibility" | "hasTVPreferredFocus" | "nextFocusDown" | "nextFocusForward" | "nextFocusLeft" | "nextFocusRight" | "nextFocusUp" | "focusable" | "accessibilityIgnoresInvertColors" | "accessibilityViewIsModal" | "accessibilityElementsHidden" | "shouldRasterizeIOS" | "accessible" | "accessibilityLabel" | "accessibilityHint" | "accessibilityRole" | "accessibilityState" | "accessibilityValue" | "accessibilityActions" | "testID" | "nativeID" | "pointerEvents" | "removeClippedSubviews"> & UniqueBranding & Readonly<{
    defaultSource?: number | import("./ImageSource").ImageURISource | import("./ImageSource").ImageURISource[] | null | undefined;
    onPartialLoad?: (() => void) | null | undefined;
    onProgress?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{
        loaded: number;
        total: number;
    }>, Event>) => void) | null | undefined;
}> & Readonly<{
    loadingIndicatorSource?: number | (UniqueBranding & Readonly<{
        uri: string;
    }>) | null | undefined;
    progressiveRenderingEnabled?: boolean | null | undefined;
    fadeDuration?: number | null | undefined;
}> & {
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    blurRadius?: number | null | undefined;
    capInsets?: import("../StyleSheet/EdgeInsetsPropType").EdgeInsetsProp | null | undefined;
    onError?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{
        error: string;
    }>, Event>) => void) | null | undefined;
    onLayout?: ((event: import("../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onLoad?: ((event: import("./ImageProps").ImageLoadEvent) => void) | null | undefined;
    onLoadEnd?: (() => void) | null | undefined;
    /**
     * Prefetches a remote image for later use by downloading it to the disk
     * cache.
     *
     * See https://facebook.github.io/react-native/docs/image.html#prefetch
     */
    onLoadStart?: (() => void) | null | undefined;
    resizeMethod?: "auto" | "resize" | "scale" | null | undefined;
    source?: number | import("./ImageSource").ImageURISource | import("./ImageSource").ImageURISource[] | null | undefined;
    style?: false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    height?: string | number | import("../Animated/src/nodes/AnimatedNode").default | null | undefined;
    width?: string | number | import("../Animated/src/nodes/AnimatedNode").default | null | undefined;
    resizeMode?: "repeat" | "center" | "stretch" | "contain" | "cover" | null | undefined;
    testID?: string | null | undefined;
    src?: undefined;
    children?: undefined;
} & Readonly<UniqueBranding & Readonly<{
    onBlur?: ((event: import("../Types/CoreEventTypes").BlurEvent) => unknown) | null | undefined;
    onFocus?: ((event: import("../Types/CoreEventTypes").FocusEvent) => unknown) | null | undefined;
}> & Readonly<{
    onAccessibilityAction?: ((event: import("../Components/View/ViewAccessibility").AccessibilityActionEvent) => unknown) | null | undefined;
    onAccessibilityTap?: (() => unknown) | null | undefined;
    onLayout?: ((event: import("../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onMagicTap?: (() => unknown) | null | undefined;
    onAccessibilityEscape?: (() => unknown) | null | undefined;
}> & Readonly<{
    onMoveShouldSetResponder?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onMoveShouldSetResponderCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onResponderGrant?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean | void) | null | undefined;
    onResponderMove?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderReject?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderRelease?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderStart?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderEnd?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderTerminate?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onResponderTerminationRequest?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onStartShouldSetResponder?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
    onStartShouldSetResponderCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => boolean) | null | undefined;
}> & Readonly<{
    onMouseEnter?: ((event: import("../Types/CoreEventTypes").MouseEvent) => void) | undefined;
    onMouseLeave?: ((event: import("../Types/CoreEventTypes").MouseEvent) => void) | undefined;
}> & Readonly<{
    onTouchCancel?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchCancelCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchEnd?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchEndCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchMove?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchMoveCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchStart?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
    onTouchStartCapture?: ((e: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => void) | null | undefined;
}> & Readonly<{
    nativeBackgroundAndroid?: (UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: string;
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color?: number | null | undefined;
        borderless?: boolean | null | undefined;
    }>) | null | undefined;
    nativeForegroundAndroid?: (UniqueBranding & Readonly<{
        type: "ThemeAttrAndroid";
        attribute: string;
    }>) | (UniqueBranding & Readonly<{
        type: "RippleAndroid";
        color?: number | null | undefined;
        borderless?: boolean | null | undefined;
    }>) | null | undefined;
    renderToHardwareTextureAndroid?: boolean | null | undefined;
    collapsable?: boolean | null | undefined;
    needsOffscreenAlphaCompositing?: boolean | null | undefined;
    accessibilityLiveRegion?: "none" | "assertive" | "polite" | null | undefined;
    importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | null | undefined;
    hasTVPreferredFocus?: boolean | null | undefined;
    nextFocusDown?: number | null | undefined;
    nextFocusForward?: number | null | undefined;
    nextFocusLeft?: number | null | undefined;
    nextFocusRight?: number | null | undefined;
    nextFocusUp?: number | null | undefined;
    focusable?: boolean | undefined;
    onClick?: ((event: import("../Types/CoreEventTypes").ResponderSyntheticEvent<UniqueBranding & Readonly<{
        changedTouches: readonly Event[];
        force: number;
        identifier: number;
        locationX: number;
        locationY: number;
        pageX: number;
        pageY: number;
        target: number | null | undefined;
        timestamp: number;
        touches: readonly Event[];
    }>>) => unknown) | null | undefined;
}> & Readonly<{
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityViewIsModal?: boolean | null | undefined;
    accessibilityElementsHidden?: boolean | null | undefined;
    shouldRasterizeIOS?: boolean | null | undefined;
}> & {
    children?: any;
    style?: false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ViewStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    accessibilityHint?: string | null | undefined;
    accessibilityRole?: "search" | "link" | "none" | "button" | "header" | "menu" | "summary" | "image" | "switch" | "text" | "checkbox" | "radio" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | null | undefined;
    accessibilityState?: import("../Components/View/ViewAccessibility").AccessibilityState | null | undefined;
    accessibilityValue?: import("../Components/View/ViewAccessibility").AccessibilityValue | null | undefined;
    accessibilityActions?: readonly import("../Components/View/ViewAccessibility").AccessibilityActionInfo[] | null | undefined;
    testID?: string | null | undefined;
    nativeID?: string | null | undefined;
    hitSlop?: import("../StyleSheet/EdgeInsetsPropType").EdgeInsetsProp | null | undefined;
    pointerEvents?: "auto" | "none" | "box-none" | "box-only" | null | undefined;
    removeClippedSubviews?: boolean | null | undefined;
}> & {
    style?: false | void | "" | import("../StyleSheet/StyleSheetTypes").____DangerouslyImpreciseStyle_Internal | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | readonly (false | void | "" | (UniqueBranding & Readonly<Partial<import("../StyleSheet/StyleSheetTypes").____ImageStyle_Internal>>) | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
    tintColor?: string | null | undefined;
    shouldNotifyLoadEvents?: boolean | undefined;
    src?: import("./AssetSourceResolver").ResolvedAssetSource | readonly {
        uri: string;
    }[] | null | undefined;
    headers?: string | null | undefined;
    defaultSrc?: string | null | undefined;
    loadingIndicatorSrc?: string | null | undefined;
}>>) | undefined) & UniqueBranding & Readonly<{
    getSize: typeof getSize;
    getSizeWithHeaders: typeof getSizeWithHeaders;
    prefetch: typeof prefetch;
    queryCache: typeof queryCache;
    resolveAssetSource: typeof resolveAssetSource;
}>);
export default _default;
