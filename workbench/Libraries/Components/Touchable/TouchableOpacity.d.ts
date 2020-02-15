import React from 'react';
/**
 * A wrapper for making views respond properly to touches.
 * On press down, the opacity of the wrapped view is decreased, dimming it.
 *
 * Opacity is controlled by wrapping the children in an Animated.View, which is
 * added to the view hierarchy.  Be aware that this can affect layout.
 *
 * Example:
 *
 * ```
 * renderButton: function() {
 *   return (
 *     <TouchableOpacity onPress={this._onPressButton}>
 *       <Image
 *         style={styles.button}
 *         source={require('./myButton.png')}
 *       />
 *     </TouchableOpacity>
 *   );
 * },
 * ```
 * ### Example
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react'
 * import {
 *   AppRegistry,
 *   StyleSheet,
 *   TouchableOpacity,
 *   Text,
 *   View,
 * } from 'react-native'
 *
 * class App extends Component {
 *   constructor(props) {
 *     super(props)
 *     this.state = { count: 0 }
 *   }
 *
 *   onPress = () => {
 *     this.setState({
 *       count: this.state.count+1
 *     })
 *   }
 *
 *  render() {
 *    return (
 *      <View style={styles.container}>
 *        <TouchableOpacity
 *          style={styles.button}
 *          onPress={this.onPress}
 *        >
 *          <Text> Touch Here </Text>
 *        </TouchableOpacity>
 *        <View style={[styles.countContainer]}>
 *          <Text style={[styles.countText]}>
 *             { this.state.count !== 0 ? this.state.count: null}
 *           </Text>
 *         </View>
 *       </View>
 *     )
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'center',
 *     paddingHorizontal: 10
 *   },
 *   button: {
 *     alignItems: 'center',
 *     backgroundColor: '#DDDDDD',
 *     padding: 10
 *   },
 *   countContainer: {
 *     alignItems: 'center',
 *     padding: 10
 *   },
 *   countText: {
 *     color: '#FF00FF'
 *   }
 * })
 *
 * AppRegistry.registerComponent('App', () => App)
 * ```
 *
 */
declare const TouchableOpacity: React.ComponentType<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
    accessible?: boolean | null | undefined;
    accessibilityLabel?: string | null | undefined;
    accessibilityHint?: string | null | undefined;
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
    hasTVPreferredFocus?: boolean | null | undefined;
    nextFocusDown?: number | null | undefined;
    nextFocusForward?: number | null | undefined;
    nextFocusLeft?: number | null | undefined;
    nextFocusRight?: number | null | undefined;
    nextFocusUp?: number | null | undefined;
    tvParallaxProperties?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        enabled?: any;
        shiftDistanceX?: any;
        shiftDistanceY?: any;
        tiltAngle?: any;
        magnification?: any;
        pressMagnification?: any;
        pressDuration?: any;
        pressDelay?: any;
    }> | null | undefined;
    activeOpacity?: number | null | undefined;
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
export default TouchableOpacity;
