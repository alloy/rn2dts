import React from 'react';
import { $TEMPORARY$string, $TEMPORARY$object } from "flow-builtin-types";
import { $Keys, $ReadOnly } from "utility-types";
/**
 * Status bar style
 */
export declare type StatusBarStyle = $Keys<{
    /**
     * Default status bar style (dark for iOS, light for Android)
     */
    default: string;
    /**
     * Dark background, white texts and icons
     */
    'light-content': string;
    /**
     * Light background, dark texts and icons
     */
    'dark-content': string;
}>;
/**
 * Status bar animation
 */
export declare type StatusBarAnimation = $Keys<{
    /**
     * No animation
     */
    none: string;
    /**
     * Fade animation
     */
    fade: string;
    /**
     * Slide animation
     */
    slide: string;
}>;
declare type AndroidProps = $ReadOnly<{
    /**
     * The background color of the status bar.
     * @platform android
     */
    backgroundColor?: string | null | undefined;
    /**
     * If the status bar is translucent.
     * When translucent is set to true, the app will draw under the status bar.
     * This is useful when using a semi transparent status bar color.
     *
     * @platform android
     */
    translucent?: boolean | null | undefined;
}>;
declare type IOSProps = $ReadOnly<{
    /**
     * If the network activity indicator should be visible.
     *
     * @platform ios
     */
    networkActivityIndicatorVisible?: boolean | null | undefined;
    /**
     * The transition effect when showing and hiding the status bar using the `hidden`
     * prop. Defaults to 'fade'.
     *
     * @platform ios
     */
    showHideTransition?: ("fade" | "slide") | null | undefined;
}>;
declare type Props = $ReadOnly<AndroidProps & IOSProps & {
    /**
     * If the status bar is hidden.
     */
    hidden?: boolean | null | undefined;
    /**
     * If the transition between status bar property changes should be animated.
     * Supported for backgroundColor, barStyle and hidden.
     */
    animated?: boolean | null | undefined;
    /**
     * Sets the color of the status bar text.
     */
    barStyle?: ("default" | "light-content" | "dark-content") | null | undefined;
}>;
/**
 * Component to control the app status bar.
 *
 * ### Usage with Navigator
 *
 * It is possible to have multiple `StatusBar` components mounted at the same
 * time. The props will be merged in the order the `StatusBar` components were
 * mounted. One use case is to specify status bar styles per route using `Navigator`.
 *
 * ```
 *  <View>
 *    <StatusBar
 *      backgroundColor="blue"
 *      barStyle="light-content"
 *    />
 *    <Navigator
 *      initialRoute={{statusBarHidden: true}}
 *      renderScene={(route, navigator) =>
 *        <View>
 *          <StatusBar hidden={route.statusBarHidden} />
 *          ...
 *        </View>
 *      }
 *    />
 *  </View>
 * ```
 *
 * ### Imperative API
 *
 * For cases where using a component is not ideal, there are static methods
 * to manipulate the `StatusBar` display stack. These methods have the same
 * behavior as mounting and unmounting a `StatusBar` component.
 *
 * For example, you can call `StatusBar.pushStackEntry` to update the status bar
 * before launching a third-party native UI component, and then call
 * `StatusBar.popStackEntry` when completed.
 *
 * ```
 * const openThirdPartyBugReporter = async () => {
 *   // The bug reporter has a dark background, so we push a new status bar style.
 *   const stackEntry = StatusBar.pushStackEntry({barStyle: 'light-content'});
 *
 *   // `open` returns a promise that resolves when the UI is dismissed.
 *   await BugReporter.open();
 *
 *   // Don't forget to call `popStackEntry` when you're done.
 *   StatusBar.popStackEntry(stackEntry);
 * };
 * ```
 *
 * There is a legacy imperative API that enables you to manually update the
 * status bar styles. However, the legacy API does not update the internal
 * `StatusBar` display stack, which means that any changes will be overridden
 * whenever a `StatusBar` component is mounted or unmounted.
 *
 * It is strongly advised that you use `pushStackEntry`, `popStackEntry`, or
 * `replaceStackEntry` instead of the static methods beginning with `set`.
 *
 * ### Constants
 *
 * `currentHeight` (Android only) The height of the status bar.
 */
declare class StatusBar extends React.Component<Props> {
    static _propsStack: never[];
    static _defaultProps: any;
    static _updateImmediate: null;
    static _currentValues: null;
    /**
     * The current height of the status bar on the device.
     *
     * @platform android
     */
    static currentHeight: number;
    /**
     * Show or hide the status bar
     * @param hidden Hide the status bar.
     * @param animation Optional animation when
     *    changing the status bar hidden property.
     */
    static setHidden(hidden: boolean, animation?: StatusBarAnimation): void;
    /**
     * Set the status bar style
     * @param style Status bar style to set
     * @param animated Animate the style change.
     */
    static setBarStyle(style: StatusBarStyle, animated?: boolean): void;
    /**
     * Control the visibility of the network activity indicator
     * @param visible Show the indicator.
     */
    static setNetworkActivityIndicatorVisible(visible: boolean): void;
    /**
     * Set the background color for the status bar
     * @param color Background color.
     * @param animated Animate the style change.
     */
    static setBackgroundColor(color: string, animated?: boolean): void;
    /**
     * Control the translucency of the status bar
     * @param translucent Set as translucent.
     */
    static setTranslucent(translucent: boolean): void;
    /**
     * Push a StatusBar entry onto the stack.
     * The return value should be passed to `popStackEntry` when complete.
     *
     * @param props Object containing the StatusBar props to use in the stack entry.
     */
    static pushStackEntry(props: any): any;
    /**
     * Pop a StatusBar entry from the stack.
     *
     * @param entry Entry returned from `pushStackEntry`.
     */
    static popStackEntry(entry: any): void;
    /**
     * Replace an existing StatusBar stack entry with new props.
     *
     * @param entry Entry returned from `pushStackEntry` to replace.
     * @param props Object containing the StatusBar props to use in the replacement stack entry.
     */
    static replaceStackEntry(entry: any, props: any): any;
    static defaultProps: $TEMPORARY$object<{
        animated: boolean;
        showHideTransition: $TEMPORARY$string<"fade">;
    }>;
    _stackEntry: null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    /**
     * Updates the native status bar with the props from the stack.
     */
    static _updatePropsStack: () => void;
    render(): React.ReactNode;
}
export default StatusBar;
