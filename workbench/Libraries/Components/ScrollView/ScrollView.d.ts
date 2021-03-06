import React from 'react';
import ScrollResponder from '../ScrollResponder';
import { UniqueBranding, React$Context } from "flow-builtin-types";
import { $PropertyType } from "utility-types";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { PointProp } from "../../StyleSheet/PointPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { PressEvent, ScrollEvent } from "../../Types/CoreEventTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { Props as ScrollViewStickyHeaderProps } from "./ScrollViewStickyHeader";
export declare type ScrollResponderType = typeof ScrollResponder.Mixin & {
    getScrollableNode: $PropertyType<ScrollView, "getScrollableNode">;
    getInnerViewNode: $PropertyType<ScrollView, "getInnerViewNode">;
    getInnerViewRef: $PropertyType<ScrollView, "getInnerViewRef">;
    getNativeScrollRef: $PropertyType<ScrollView, "getNativeScrollRef">;
    setNativeProps: $PropertyType<ScrollView, "setNativeProps">;
    scrollTo: $PropertyType<ScrollView, "scrollTo">;
    flashScrollIndicators: $PropertyType<ScrollView, "flashScrollIndicators">;
};
declare type IOSProps = UniqueBranding & Readonly<{
    /**
     * Controls whether iOS should automatically adjust the content inset
     * for scroll views that are placed behind a navigation bar or
     * tab bar/ toolbar. The default value is true.
     * @platform ios
     */
    automaticallyAdjustContentInsets?: boolean | null | undefined;
    /**
     * The amount by which the scroll view content is inset from the edges
     * of the scroll view. Defaults to `{top: 0, left: 0, bottom: 0, right: 0}`.
     * @platform ios
     */
    contentInset?: EdgeInsetsProp | null | undefined;
    /**
     * Used to manually set the starting scroll offset.
     * The default value is `{x: 0, y: 0}`.
     * @platform ios
     */
    contentOffset?: PointProp | null | undefined;
    /**
     * When true, the scroll view bounces when it reaches the end of the
     * content if the content is larger then the scroll view along the axis of
     * the scroll direction. When false, it disables all bouncing even if
     * the `alwaysBounce*` props are true. The default value is true.
     * @platform ios
     */
    bounces?: boolean | null | undefined;
    /**
     * By default, ScrollView has an active pan responder that hijacks panresponders
     * deeper in the render tree in order to prevent accidental touches while scrolling.
     * However, in certain occasions (such as when using snapToInterval) in a vertical scrollview
     * You may want to disable this behavior in order to prevent the ScrollView from blocking touches
     */
    disableScrollViewPanResponder?: boolean | null | undefined;
    /**
     * When true, gestures can drive zoom past min/max and the zoom will animate
     * to the min/max value at gesture end, otherwise the zoom will not exceed
     * the limits.
     * @platform ios
     */
    bouncesZoom?: boolean | null | undefined;
    /**
     * When true, the scroll view bounces horizontally when it reaches the end
     * even if the content is smaller than the scroll view itself. The default
     * value is true when `horizontal={true}` and false otherwise.
     * @platform ios
     */
    alwaysBounceHorizontal?: boolean | null | undefined;
    /**
     * When true, the scroll view bounces vertically when it reaches the end
     * even if the content is smaller than the scroll view itself. The default
     * value is false when `horizontal={true}` and true otherwise.
     * @platform ios
     */
    alwaysBounceVertical?: boolean | null | undefined;
    /**
     * When true, the scroll view automatically centers the content when the
     * content is smaller than the scroll view bounds; when the content is
     * larger than the scroll view, this property has no effect. The default
     * value is false.
     * @platform ios
     */
    centerContent?: boolean | null | undefined;
    /**
     * The style of the scroll indicators.
     *
     *   - `'default'` (the default), same as `black`.
     *   - `'black'`, scroll indicator is black. This style is good against a light background.
     *   - `'white'`, scroll indicator is white. This style is good against a dark background.
     *
     * @platform ios
     */
    indicatorStyle?: ("default" | "black" | "white") | null | undefined;
    /**
     * When true, the ScrollView will try to lock to only vertical or horizontal
     * scrolling while dragging.  The default value is false.
     * @platform ios
     */
    directionalLockEnabled?: boolean | null | undefined;
    /**
     * When false, once tracking starts, won't try to drag if the touch moves.
     * The default value is true.
     * @platform ios
     */
    canCancelContentTouches?: boolean | null | undefined;
    /**
     * When set, the scroll view will adjust the scroll position so that the first child that is
     * currently visible and at or beyond `minIndexForVisible` will not change position. This is
     * useful for lists that are loading content in both directions, e.g. a chat thread, where new
     * messages coming in might otherwise cause the scroll position to jump. A value of 0 is common,
     * but other values such as 1 can be used to skip loading spinners or other content that should
     * not maintain position.
     *
     * The optional `autoscrollToTopThreshold` can be used to make the content automatically scroll
     * to the top after making the adjustment if the user was within the threshold of the top before
     * the adjustment was made. This is also useful for chat-like applications where you want to see
     * new messages scroll into place, but not if the user has scrolled up a ways and it would be
     * disruptive to scroll a bunch.
     *
     * Caveat 1: Reordering elements in the scrollview with this enabled will probably cause
     * jumpiness and jank. It can be fixed, but there are currently no plans to do so. For now,
     * don't re-order the content of any ScrollViews or Lists that use this feature.
     *
     * Caveat 2: This simply uses `contentOffset` and `frame.origin` in native code to compute
     * visibility. Occlusion, transforms, and other complexity won't be taken into account as to
     * whether content is "visible" or not.
     *
     * @platform ios
     */
    maintainVisibleContentPosition?: (UniqueBranding & Readonly<{
        minIndexForVisible: number;
        autoscrollToTopThreshold?: number | null | undefined;
    }>) | null | undefined;
    /**
     * The maximum allowed zoom scale. The default value is 1.0.
     * @platform ios
     */
    maximumZoomScale?: number | null | undefined;
    /**
     * The minimum allowed zoom scale. The default value is 1.0.
     * @platform ios
     */
    minimumZoomScale?: number | null | undefined;
    /**
     * When true, ScrollView allows use of pinch gestures to zoom in and out.
     * The default value is true.
     * @platform ios
     */
    pinchGestureEnabled?: boolean | null | undefined;
    /**
     * This controls how often the scroll event will be fired while scrolling
     * (as a time interval in ms). A lower number yields better accuracy for code
     * that is tracking the scroll position, but can lead to scroll performance
     * problems due to the volume of information being send over the bridge.
     *
     * Values between 0 and 17ms indicate 60fps updates are needed and throttling
     * will be disabled.
     *
     * If you do not need precise scroll position tracking, set this value higher
     * to limit the information being sent across the bridge.
     *
     * The default value is zero, which results in the scroll event being sent only
     * once each time the view is scrolled.
     *
     * @platform ios
     */
    scrollEventThrottle?: number | null | undefined;
    /**
     * The amount by which the scroll view indicators are inset from the edges
     * of the scroll view. This should normally be set to the same value as
     * the `contentInset`. Defaults to `{0, 0, 0, 0}`.
     * @platform ios
     */
    scrollIndicatorInsets?: EdgeInsetsProp | null | undefined;
    /**
     * When true, the scroll view can be programmatically scrolled beyond its
     * content size. The default value is false.
     * @platform ios
     */
    scrollToOverflowEnabled?: boolean | null | undefined;
    /**
     * When true, the scroll view scrolls to top when the status bar is tapped.
     * The default value is true.
     * @platform ios
     */
    scrollsToTop?: boolean | null | undefined;
    /**
     * Fires when the scroll view scrolls to top after the status bar has been tapped
     * @platform ios
     */
    onScrollToTop?: ((event: ScrollEvent) => void);
    /**
     * When true, shows a horizontal scroll indicator.
     * The default value is true.
     */
    showsHorizontalScrollIndicator?: boolean | null | undefined;
    /**
     * When `snapToInterval` is set, `snapToAlignment` will define the relationship
     * of the snapping to the scroll view.
     *
     *   - `'start'` (the default) will align the snap at the left (horizontal) or top (vertical)
     *   - `'center'` will align the snap in the center
     *   - `'end'` will align the snap at the right (horizontal) or bottom (vertical)
     *
     * @platform ios
     */
    snapToAlignment?: ("start" | "center" | "end") | null | undefined;
    /**
     * The current scale of the scroll view content. The default value is 1.0.
     * @platform ios
     */
    zoomScale?: number | null | undefined;
    /**
     * This property specifies how the safe area insets are used to modify the
     * content area of the scroll view. The default value of this property is
     * "never". Available on iOS 11 and later.
     * @platform ios
     */
    contentInsetAdjustmentBehavior?: ("automatic" | "scrollableAxes" | "never" | "always") | null | undefined;
    /**
     * When true, ScrollView will emit updateChildFrames data in scroll events,
     * otherwise will not compute or emit child frame data.  This only exists
     * to support legacy issues, `onLayout` should be used instead to retrieve
     * frame data.
     * The default value is false.
     * @platform ios
     */
    DEPRECATED_sendUpdatedChildFrames?: boolean | null | undefined;
}>;
declare type AndroidProps = UniqueBranding & Readonly<{
    /**
     * Enables nested scrolling for Android API level 21+.
     * Nested scrolling is supported by default on iOS
     * @platform android
     */
    nestedScrollEnabled?: boolean | null | undefined;
    /**
     * Sometimes a scrollview takes up more space than its content fills. When this is
     * the case, this prop will fill the rest of the scrollview with a color to avoid setting
     * a background and creating unnecessary overdraw. This is an advanced optimization
     * that is not needed in the general case.
     * @platform android
     */
    endFillColor?: ColorValue | null | undefined;
    /**
     * Tag used to log scroll performance on this scroll view. Will force
     * momentum events to be turned on (see sendMomentumEvents). This doesn't do
     * anything out of the box and you need to implement a custom native
     * FpsListener for it to be useful.
     * @platform android
     */
    scrollPerfTag?: string | null | undefined;
    /**
     * Used to override default value of overScroll mode.
     *
     * Possible values:
     *
     *  - `'auto'` - Default value, allow a user to over-scroll
     *    this view only if the content is large enough to meaningfully scroll.
     *  - `'always'` - Always allow a user to over-scroll this view.
     *  - `'never'` - Never allow a user to over-scroll this view.
     *
     * @platform android
     */
    overScrollMode?: ("auto" | "always" | "never") | null | undefined;
    /**
     * Causes the scrollbars not to turn transparent when they are not in use.
     * The default value is false.
     *
     * @platform android
     */
    persistentScrollbar?: boolean | null | undefined;
    /**
     * Fades out the edges of the the scroll content.
     *
     * If the value is greater than 0, the fading edges will be set accordingly
     * to the current scroll direction and position,
     * indicating if there is more content to show.
     *
     * The default value is 0.
     *
     * @platform android
     */
    fadingEdgeLength?: number | null | undefined;
}>;
declare type VRProps = UniqueBranding & Readonly<{
    /**
     * Optionally an image can be used for the scroll bar thumb. This will
     * override the color. While the image is loading or the image fails to
     * load the color will be used instead. Use an alpha of 0 in the color
     * to avoid seeing it while the image is loading.
     *
     * - `uri` - a string representing the resource identifier for the image, which
     * should be either a local file path or the name of a static image resource
     * - `number` - Opaque type returned by something like
     * `import IMAGE from './image.jpg'`.
     * @platform vr
     */
    scrollBarThumbImage?: ((UniqueBranding & Readonly<{}>) | number) | null | undefined;
}>;
declare type StickyHeaderComponentType = React.AbstractComponent<ScrollViewStickyHeaderProps, UniqueBranding & Readonly<{
    setNextHeaderY: ((arg0: number) => void);
}>>;
export declare type Props = UniqueBranding & Readonly<ViewProps & IOSProps & AndroidProps & VRProps & {
    /**
     * These styles will be applied to the scroll view content container which
     * wraps all of the child views. Example:
     *
     * ```
     * return (
     *   <ScrollView contentContainerStyle={styles.contentContainer}>
     *   </ScrollView>
     * );
     * ...
     * const styles = StyleSheet.create({
     *   contentContainer: {
     *     paddingVertical: 20
     *   }
     * });
     * ```
     */
    contentContainerStyle?: ViewStyleProp | null | undefined;
    /**
     * When true, the scroll view stops on the next index (in relation to scroll
     * position at release) regardless of how fast the gesture is. This can be
     * used for horizontal pagination when the page is less than the width of
     * the ScrollView. The default value is false.
     */
    disableIntervalMomentum?: boolean | null | undefined;
    /**
     * A floating-point number that determines how quickly the scroll view
     * decelerates after the user lifts their finger. You may also use string
     * shortcuts `"normal"` and `"fast"` which match the underlying iOS settings
     * for `UIScrollViewDecelerationRateNormal` and
     * `UIScrollViewDecelerationRateFast` respectively.
     *
     *   - `'normal'`: 0.998 on iOS, 0.985 on Android (the default)
     *   - `'fast'`: 0.99 on iOS, 0.9 on Android
     */
    decelerationRate?: ("fast" | "normal" | number) | null | undefined;
    /**
     * When true, the scroll view's children are arranged horizontally in a row
     * instead of vertically in a column. The default value is false.
     */
    horizontal?: boolean | null | undefined;
    /**
     * If sticky headers should stick at the bottom instead of the top of the
     * ScrollView. This is usually used with inverted ScrollViews.
     */
    invertStickyHeaders?: boolean | null | undefined;
    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *
     * *Cross platform*
     *
     *   - `'none'` (the default), drags do not dismiss the keyboard.
     *   - `'on-drag'`, the keyboard is dismissed when a drag begins.
     *
     * *iOS Only*
     *
     *   - `'interactive'`, the keyboard is dismissed interactively with the drag and moves in
     *     synchrony with the touch; dragging upwards cancels the dismissal.
     *     On android this is not supported and it will have the same behavior as 'none'.
     */
    keyboardDismissMode?: (// default
    "none" | "on-drag" | "interactive") | null | undefined;
    /**
     * Determines when the keyboard should stay visible after a tap.
     *
     *   - `'never'` (the default), tapping outside of the focused text input when the keyboard
     *     is up dismisses the keyboard. When this happens, children won't receive the tap.
     *   - `'always'`, the keyboard will not dismiss automatically, and the scroll view will not
     *     catch taps, but children of the scroll view can catch taps.
     *   - `'handled'`, the keyboard will not dismiss automatically when the tap was handled by
     *     a children, (or captured by an ancestor).
     *   - `false`, deprecated, use 'never' instead
     *   - `true`, deprecated, use 'always' instead
     */
    keyboardShouldPersistTaps?: ("always" | "never" | "handled" | true | false) | null | undefined;
    /**
     * Called when the momentum scroll starts (scroll which occurs as the ScrollView glides to a stop).
     */
    onMomentumScrollBegin?: ((event: ScrollEvent) => void) | null | undefined;
    /**
     * Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).
     */
    onMomentumScrollEnd?: ((event: ScrollEvent) => void) | null | undefined;
    /**
     * Fires at most once per frame during scrolling. The frequency of the
     * events can be controlled using the `scrollEventThrottle` prop.
     */
    onScroll?: ((event: ScrollEvent) => void) | null | undefined;
    /**
     * Called when the user begins to drag the scroll view.
     */
    onScrollBeginDrag?: ((event: ScrollEvent) => void) | null | undefined;
    /**
     * Called when the user stops dragging the scroll view and it either stops
     * or begins to glide.
     */
    onScrollEndDrag?: ((event: ScrollEvent) => void) | null | undefined;
    /**
     * Called when scrollable content view of the ScrollView changes.
     *
     * Handler function is passed the content width and content height as parameters:
     * `(contentWidth, contentHeight)`
     *
     * It's implemented using onLayout handler attached to the content container
     * which this ScrollView renders.
     */
    onContentSizeChange?: ((contentWidth: number, contentHeight: number) => void);
    onKeyboardDidShow?: ((event: PressEvent) => void);
    /**
     * When true, the scroll view stops on multiples of the scroll view's size
     * when scrolling. This can be used for horizontal pagination. The default
     * value is false.
     *
     * Note: Vertical pagination is not supported on Android.
     */
    pagingEnabled?: boolean | null | undefined;
    /**
     * When false, the view cannot be scrolled via touch interaction.
     * The default value is true.
     *
     * Note that the view can always be scrolled by calling `scrollTo`.
     */
    scrollEnabled?: boolean | null | undefined;
    /**
     * When true, shows a vertical scroll indicator.
     * The default value is true.
     */
    showsVerticalScrollIndicator?: boolean | null | undefined;
    /**
     * An array of child indices determining which children get docked to the
     * top of the screen when scrolling. For example, passing
     * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
     * top of the scroll view. This property is not supported in conjunction
     * with `horizontal={true}`.
     */
    stickyHeaderIndices?: ReadonlyArray<number> | null | undefined;
    /**
     * A React Component that will be used to render sticky headers.
     * To be used together with `stickyHeaderIndices` or with `SectionList`, defaults to `ScrollViewStickyHeader`.
     * You may need to set this if your sticky header uses custom transforms (eg. translation),
     * for example when you want your list to have an animated hidable header.
     */
    StickyHeaderComponent?: StickyHeaderComponentType;
    /**
     * When set, causes the scroll view to stop at multiples of the value of
     * `snapToInterval`. This can be used for paginating through children
     * that have lengths smaller than the scroll view. Typically used in
     * combination with `snapToAlignment` and `decelerationRate="fast"`.
     *
     * Overrides less configurable `pagingEnabled` prop.
     */
    snapToInterval?: number | null | undefined;
    /**
     * When set, causes the scroll view to stop at the defined offsets.
     * This can be used for paginating through variously sized children
     * that have lengths smaller than the scroll view. Typically used in
     * combination with `decelerationRate="fast"`.
     *
     * Overrides less configurable `pagingEnabled` and `snapToInterval` props.
     */
    snapToOffsets?: ReadonlyArray<number> | null | undefined;
    /**
     * Use in conjunction with `snapToOffsets`. By default, the beginning
     * of the list counts as a snap offset. Set `snapToStart` to false to disable
     * this behavior and allow the list to scroll freely between its start and
     * the first `snapToOffsets` offset.
     * The default value is true.
     */
    snapToStart?: boolean | null | undefined;
    /**
     * Use in conjunction with `snapToOffsets`. By default, the end
     * of the list counts as a snap offset. Set `snapToEnd` to false to disable
     * this behavior and allow the list to scroll freely between its end and
     * the last `snapToOffsets` offset.
     * The default value is true.
     */
    snapToEnd?: boolean | null | undefined;
    /**
     * Experimental: When true, offscreen child views (whose `overflow` value is
     * `hidden`) are removed from their native backing superview when offscreen.
     * This can improve scrolling performance on long lists. The default value is
     * true.
     */
    removeClippedSubviews?: boolean | null | undefined;
    /**
     * A RefreshControl component, used to provide pull-to-refresh
     * functionality for the ScrollView. Only works for vertical ScrollViews
     * (`horizontal` prop must be `false`).
     *
     * See [RefreshControl](docs/refreshcontrol.html).
     */
    refreshControl?: React.ReactElement<any> | null | undefined;
    children?: React.ReactNode;
}>;
declare type ContextType = {
    horizontal: boolean;
} | null;
/**
 * Component that wraps platform ScrollView while providing
 * integration with touch locking "responder" system.
 *
 * Keep in mind that ScrollViews must have a bounded height in order to work,
 * since they contain unbounded-height children into a bounded container (via
 * a scroll interaction). In order to bound the height of a ScrollView, either
 * set the height of the view directly (discouraged) or make sure all parent
 * views have bounded height. Forgetting to transfer `{flex: 1}` down the
 * view stack can lead to errors here, which the element inspector makes
 * easy to debug.
 *
 * Doesn't yet support other contained responders from blocking this scroll
 * view from becoming the responder.
 *
 *
 * `<ScrollView>` vs [`<FlatList>`](/react-native/docs/flatlist.html) - which one to use?
 *
 * `ScrollView` simply renders all its react child components at once. That
 * makes it very easy to understand and use.
 *
 * On the other hand, this has a performance downside. Imagine you have a very
 * long list of items you want to display, maybe several screens worth of
 * content. Creating JS components and native views for everything all at once,
 * much of which may not even be shown, will contribute to slow rendering and
 * increased memory usage.
 *
 * This is where `FlatList` comes into play. `FlatList` renders items lazily,
 * just when they are about to appear, and removes items that scroll way off
 * screen to save memory and processing time.
 *
 * `FlatList` is also handy if you want to render separators between your items,
 * multiple columns, infinite scroll loading, or any number of other features it
 * supports out of the box.
 */
declare class ScrollView extends React.Component<Props> {
    static Context: React$Context<ContextType>;
    /**
     * Returns a reference to the underlying scroll responder, which supports
     * operations like `scrollTo`. All ScrollView-like components should
     * implement this method so that they can be composed while providing access
     * to the underlying scroll responder's methods.
     */
    getScrollResponder(): ScrollResponderType;
    getScrollableNode(): number | null | undefined;
    getInnerViewNode(): number | null | undefined;
    getInnerViewRef(): React.ElementRef<HostComponent<unknown>> | null | undefined;
    getNativeScrollRef(): React.ElementRef<HostComponent<unknown>> | null | undefined;
    /**
     * Scrolls to a given x, y offset, either immediately or with a smooth animation.
     *
     * Example:
     *
     * `scrollTo({x: 0, y: 0, animated: true})`
     *
     * Note: The weird function signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as an alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    scrollTo(options?: {
        x?: number;
        y?: number;
        animated?: boolean;
    } | number, deprecatedX?: number, deprecatedAnimated?: boolean): void;
    /**
     * If this is a vertical ScrollView scrolls to the bottom.
     * If this is a horizontal ScrollView scrolls to the right.
     *
     * Use `scrollToEnd({animated: true})` for smooth animated scrolling,
     * `scrollToEnd({animated: false})` for immediate scrolling.
     * If no options are passed, `animated` defaults to true.
     */
    scrollToEnd(options?: {
        animated?: boolean;
    } | null | undefined): void;
    /**
     * Displays the scroll indicators momentarily.
     *
     * @platform ios
     */
    flashScrollIndicators(): void;
}
export default ScrollView;
