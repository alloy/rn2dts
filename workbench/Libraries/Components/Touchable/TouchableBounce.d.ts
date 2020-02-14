import React from 'react';
/**
 * Example of using the `TouchableMixin` to play well with other responder
 * locking views including `ScrollView`. `TouchableMixin` provides touchable
 * hooks (`this.touchableHandle*`) that we forward events to. In turn,
 * `TouchableMixin` expects us to implement some abstract methods to handle
 * interesting interactions such as `handleTouchablePress`.
 */
declare const TouchableBounce: React.ComponentType<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    accessible?: boolean | null | undefined;
    accessibilityLabel?: any;
    accessibilityHint?: any;
    accessibilityIgnoresInvertColors?: boolean | null | undefined;
    accessibilityRole?: "search" | "link" | "none" | "button" | "header" | "menu" | "summary" | "image" | "switch" | "text" | "checkbox" | "radio" | "menubar" | "menuitem" | "progressbar" | "tab" | "toolbar" | "scrollbar" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "combobox" | "radiogroup" | "spinbutton" | "tablist" | "timer" | null | undefined;
    accessibilityStates?: import("utility-types/dist/mapped-types")._DeepReadonlyArray<"disabled" | "expanded" | "collapsed" | "selected" | "checked" | "unchecked" | "busy" | "hasPopup"> | null | undefined;
    accessibilityState?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        disabled?: any;
        selected?: any;
        checked?: any;
        busy?: any;
        expanded?: any;
    }> | null | undefined;
    accessibilityActions?: import("utility-types/dist/mapped-types")._DeepReadonlyArray<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        name: any;
        label?: any;
    }>> | null | undefined;
    children?: string | number | boolean | import("utility-types/dist/mapped-types")._DeepReadonlyObject<unknown> | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        type: any;
        props: any;
        key: any;
    }> | import("utility-types/dist/mapped-types")._DeepReadonlyArray<{} | null | undefined> | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        key: any;
        children: any;
        type: any;
        props: any;
    }> | null | undefined;
    delayLongPress?: number | null | undefined;
    delayPressIn?: number | null | undefined;
    delayPressOut?: number | null | undefined;
    disabled?: boolean | null | undefined;
    hitSlop?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        top?: any;
        left?: any;
        bottom?: any;
        right?: any;
    }> | null | undefined;
    nativeID?: string | null | undefined;
    touchSoundDisabled?: boolean | null | undefined;
    onBlur?: ((e: React.SyntheticEvent<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        target: any;
    }>, Event>) => void) | null | undefined;
    onFocus?: ((e: React.SyntheticEvent<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        target: any;
    }>, Event>) => void) | null | undefined;
    onLayout?: ((event: import("../../Types/CoreEventTypes").LayoutEvent) => unknown) | null | undefined;
    onLongPress?: ((event: any) => unknown) | null | undefined;
    onPress?: ((event: any) => unknown) | null | undefined;
    onPressIn?: ((event: any) => unknown) | null | undefined;
    onPressOut?: ((event: any) => unknown) | null | undefined;
    onAccessibilityAction?: ((event: import("../View/ViewAccessibility").AccessibilityActionEvent) => void) | null | undefined;
    pressRetentionOffset?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        top?: any;
        left?: any;
        bottom?: any;
        right?: any;
    }> | null | undefined;
    rejectResponderTermination?: boolean | null | undefined;
    testID?: string | null | undefined;
    onPressWithCompletion?: ((fn: () => void) => void) | null | undefined;
    onPressAnimationComplete?: (() => void) | null | undefined;
    releaseVelocity?: number | null | undefined;
    releaseBounciness?: number | null | undefined;
    style?: false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | readonly (false | void | "" | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
}>>;
export default TouchableBounce;
