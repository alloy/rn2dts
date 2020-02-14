import React from 'react';
/**
 * A wrapper for making views respond properly to touches.
 * On press down, the opacity of the wrapped view is decreased, which allows
 * the underlay color to show through, darkening or tinting the view.
 *
 * The underlay comes from wrapping the child in a new View, which can affect
 * layout, and sometimes cause unwanted visual artifacts if not used correctly,
 * for example if the backgroundColor of the wrapped view isn't explicitly set
 * to an opaque color.
 *
 * TouchableHighlight must have one child (not zero or more than one).
 * If you wish to have several child components, wrap them in a View.
 *
 * Example:
 *
 * ```
 * renderButton: function() {
 *   return (
 *     <TouchableHighlight onPress={this._onPressButton}>
 *       <Image
 *         style={styles.button}
 *         source={require('./myButton.png')}
 *       />
 *     </TouchableHighlight>
 *   );
 * },
 * ```
 *
 *
 * ### Example
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react'
 * import {
 *   AppRegistry,
 *   StyleSheet,
 *   TouchableHighlight,
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
 *     return (
 *       <View style={styles.container}>
 *         <TouchableHighlight
 *          style={styles.button}
 *          onPress={this.onPress}
 *         >
 *          <Text> Touch Here </Text>
 *         </TouchableHighlight>
 *         <View style={[styles.countContainer]}>
 *           <Text style={[styles.countText]}>
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
declare const TouchableHighlight: React.ComponentType<import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
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
    hasTVPreferredFocus?: boolean | null | undefined;
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
    nextFocusDown?: number | null | undefined;
    nextFocusForward?: number | null | undefined;
    nextFocusLeft?: number | null | undefined;
    nextFocusRight?: number | null | undefined;
    nextFocusUp?: number | null | undefined;
    activeOpacity?: number | null | undefined;
    underlayColor?: string | null | undefined;
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
    onShowUnderlay?: (() => void) | null | undefined;
    onHideUnderlay?: (() => void) | null | undefined;
    testOnly_pressed?: boolean | null | undefined;
}>>;
export default TouchableHighlight;
