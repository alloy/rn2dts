import { $ReadOnly } from "utility-types";
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type CheckBoxEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
    value: boolean;
}>>;
declare type NativeProps = $ReadOnly<ViewProps & {
    /**
     * Used in case the props change removes the component.
     */
    onChange?: ((event: CheckBoxEvent) => unknown) | null | undefined;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: ((value: boolean) => unknown) | null | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null | undefined;
    on?: boolean | null | undefined;
    enabled?: boolean;
    tintColors: {
        true: number | null | undefined;
        false: number | null | undefined;
    } | typeof undefined;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeValue: ((viewRef: React.ElementRef<NativeType>, value: boolean) => void);
}
export declare const Commands: NativeCommands;
declare const _default: React.AbstractComponent<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    onBlur?: ((event: import("../../Types/CoreEventTypes").BlurEvent) => unknown) | null | undefined;
    onFocus?: ((event: import("../../Types/CoreEventTypes").FocusEvent) => unknown) | null | undefined;
    onAccessibilityAction?: ((event: import("../View/ViewAccessibility").AccessibilityActionEvent) => unknown) | null | undefined;
    onAccessibilityTap?: (() => unknown) | null | undefined;
    onLayout?: ((event: import("../../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onMagicTap?: (() => unknown) | null | undefined;
    onAccessibilityEscape?: (() => unknown) | null | undefined;
    onMoveShouldSetResponder?: ((e: any) => boolean) | null | undefined;
    onMoveShouldSetResponderCapture?: ((e: any) => boolean) | null | undefined;
    onResponderGrant?: ((e: any) => boolean | void) | null | undefined;
    onResponderMove?: ((e: any) => void) | null | undefined;
    onResponderReject?: ((e: any) => void) | null | undefined;
    onResponderRelease?: ((e: any) => void) | null | undefined;
    onResponderStart?: ((e: any) => void) | null | undefined;
    onResponderEnd?: ((e: any) => void) | null | undefined;
    onResponderTerminate?: ((e: any) => void) | null | undefined;
    onResponderTerminationRequest?: ((e: any) => boolean) | null | undefined;
    onStartShouldSetResponder?: ((e: any) => boolean) | null | undefined;
    onStartShouldSetResponderCapture?: ((e: any) => boolean) | null | undefined;
    onMouseEnter?: ((event: import("../../Types/CoreEventTypes").MouseEvent) => void) | undefined;
    onMouseLeave?: ((event: import("../../Types/CoreEventTypes").MouseEvent) => void) | undefined;
    onTouchCancel?: ((e: any) => void) | null | undefined;
    onTouchCancelCapture?: ((e: any) => void) | null | undefined;
    onTouchEnd?: ((e: any) => void) | null | undefined;
    onTouchEndCapture?: ((e: any) => void) | null | undefined;
    onTouchMove?: ((e: any) => void) | null | undefined;
    onTouchMoveCapture?: ((e: any) => void) | null | undefined;
    onTouchStart?: ((e: any) => void) | null | undefined;
    onTouchStartCapture?: ((e: any) => void) | null | undefined;
    nativeBackgroundAndroid?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        type: any;
        attribute: any;
    }> | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        type: any;
        color?: any;
        borderless?: any;
    }> | null | undefined;
    nativeForegroundAndroid?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        type: any;
        attribute: any;
    }> | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        type: any;
        color?: any;
        borderless?: any;
    }> | null | undefined;
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
    onClick?: ((event: any) => unknown) | null | undefined;
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityViewIsModal?: boolean | null | undefined;
    accessibilityElementsHidden?: boolean | null | undefined;
    shouldRasterizeIOS?: boolean | null | undefined;
    children?: any;
    style?: false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | import("utility-types/dist/mapped-types")._DeepReadonlyArray<false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        display?: any;
        width?: any;
        height?: any;
        bottom?: any;
        end?: any;
        left?: any;
        right?: any;
        start?: any;
        top?: any;
        minWidth?: any;
        maxWidth?: any;
        minHeight?: any;
        maxHeight?: any;
        margin?: any;
        marginBottom?: any;
        marginEnd?: any;
        marginHorizontal?: any;
        marginLeft?: any;
        marginRight?: any;
        marginStart?: any;
        marginTop?: any;
        marginVertical?: any;
        padding?: any;
        paddingBottom?: any;
        paddingEnd?: any;
        paddingHorizontal?: any;
        paddingLeft?: any;
        paddingRight?: any;
        paddingStart?: any;
        paddingTop?: any;
        paddingVertical?: any;
        borderWidth?: any;
        borderBottomWidth?: any;
        borderEndWidth?: any;
        borderLeftWidth?: any;
        borderRightWidth?: any;
        borderStartWidth?: any;
        borderTopWidth?: any;
        position?: any;
        flexDirection?: any;
        flexWrap?: any;
        justifyContent?: any;
        alignItems?: any;
        alignSelf?: any;
        alignContent?: any;
        overflow?: any;
        flex?: any;
        flexGrow?: any;
        flexShrink?: any;
        flexBasis?: any;
        aspectRatio?: any;
        zIndex?: any;
        direction?: any;
        shadowColor?: any;
        shadowOffset?: any;
        shadowOpacity?: any;
        shadowRadius?: any;
        transform?: any;
        backfaceVisibility?: any;
        backgroundColor?: any;
        borderColor?: any;
        borderBottomColor?: any;
        borderEndColor?: any;
        borderLeftColor?: any;
        borderRightColor?: any;
        borderStartColor?: any;
        borderTopColor?: any;
        borderRadius?: any;
        borderBottomEndRadius?: any;
        borderBottomLeftRadius?: any;
        borderBottomRightRadius?: any;
        borderBottomStartRadius?: any;
        borderTopEndRadius?: any;
        borderTopLeftRadius?: any;
        borderTopRightRadius?: any;
        borderTopStartRadius?: any;
        borderStyle?: any;
        opacity?: any;
        elevation?: any;
    }> | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | undefined;
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    accessibilityHint?: string | null | undefined;
    accessibilityRole?: "search" | "link" | "none" | "button" | "header" | "menu" | "summary" | "image" | "switch" | "text" | "checkbox" | "radio" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | null | undefined;
    accessibilityState?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        disabled?: any;
        selected?: any;
        checked?: any;
        busy?: any;
        expanded?: any;
    }> | null | undefined;
    accessibilityValue?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        min?: any;
        max?: any;
        now?: any;
        text?: any;
    }> | null | undefined;
    accessibilityActions?: import("utility-types/dist/mapped-types")._DeepReadonlyArray<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        name: any;
        label?: any;
    }>> | null | undefined;
    testID?: string | null | undefined;
    nativeID?: string | null | undefined;
    hitSlop?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        top?: any;
        left?: any;
        bottom?: any;
        right?: any;
    }> | null | undefined;
    pointerEvents?: "auto" | "none" | "box-none" | "box-only" | null | undefined;
    removeClippedSubviews?: boolean | null | undefined;
    onChange?: ((event: CheckBoxEvent) => unknown) | null | undefined;
    onValueChange?: ((value: boolean) => unknown) | null | undefined;
    on?: boolean | null | undefined;
    enabled?: boolean | undefined;
    tintColors: {
        true: number | null | undefined;
        false: number | null | undefined;
    } | undefined;
}>, import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    blur: () => void;
    focus: () => void;
    measure: (callback: import("../../Renderer/shims/ReactNativeTypes").MeasureOnSuccessCallback) => void;
    measureInWindow: (callback: import("../../Renderer/shims/ReactNativeTypes").MeasureInWindowOnSuccessCallback) => void;
    measureLayout: (relativeToNativeNode: number | undefined, onSuccess: import("../../Renderer/shims/ReactNativeTypes").MeasureLayoutOnSuccessCallback, onFail?: (() => void) | undefined) => void;
    setNativeProps: (nativeProps: any) => void;
}>>;
export default _default;
