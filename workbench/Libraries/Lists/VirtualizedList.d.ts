import Batchinator from '../Interaction/Batchinator';
import FillRateHelper from './FillRateHelper';
import React from 'react';
import ScrollView from '../Components/ScrollView/ScrollView';
import View from '../Components/View/View';
import ViewabilityHelper from './ViewabilityHelper';
import { React$PropType$Primitive } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
import { ScrollResponderType } from "../Components/ScrollView/ScrollView";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { ViewabilityConfig, ViewToken, ViewabilityConfigCallbackPair } from "./ViewabilityHelper";
declare type Item = any;
export declare type Separators = {
    highlight: (() => void);
    unhighlight: (() => void);
    updateProps: ((select: "leading" | "trailing", newProps: any) => void);
};
export declare type RenderItemProps<ItemT> = {
    item: ItemT;
    index: number;
    separators: Separators;
};
export declare type RenderItemType<ItemT> = ((info: RenderItemProps<ItemT>) => React.ReactNode);
declare type ViewabilityHelperCallbackTuple = {
    viewabilityHelper: ViewabilityHelper;
    onViewableItemsChanged: ((info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void);
};
declare type RequiredProps = {
    /**
     * The default accessor functions assume this is an Array<{key: string} | {id: string}> but you can override
     * getItem, getItemCount, and keyExtractor to handle any type of index-based data.
     */
    data?: any;
    /**
     * A generic accessor for extracting an item from any sort of data blob.
     */
    getItem: ((data: any, index: number) => Item | null | undefined);
    /**
     * Determines how many items are in the data blob.
     */
    getItemCount: ((data: any) => number);
};
declare type OptionalProps = {
    renderItem?: RenderItemType<Item> | null | undefined;
    /**
     * `debug` will turn on extra logging and visual overlays to aid with debugging both usage and
     * implementation, but with a significant perf hit.
     */
    debug?: boolean | null | undefined;
    /**
     * DEPRECATED: Virtualization provides significant performance and memory optimizations, but fully
     * unmounts react instances that are outside of the render window. You should only need to disable
     * this for debugging purposes.
     */
    disableVirtualization?: boolean | null | undefined;
    /**
     * A marker property for telling the list to re-render (since it implements `PureComponent`). If
     * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
     * `data` prop, stick it here and treat it immutably.
     */
    extraData?: any;
    getItemLayout?: ((data: any, index: number) => {
        length: number;
        offset: number;
        index: number;
    });
    horizontal?: boolean | null | undefined;
    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not
     * much more. Note these items will never be unmounted as part of the windowed rendering in order
     * to improve perceived performance of scroll-to-top actions.
     */
    initialNumToRender: number;
    /**
     * Instead of starting at the top with the first item, start at `initialScrollIndex`. This
     * disables the "scroll to top" optimization that keeps the first `initialNumToRender` items
     * always rendered and immediately renders the items starting at this initial index. Requires
     * `getItemLayout` to be implemented.
     */
    initialScrollIndex?: number | null | undefined;
    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted?: boolean | null | undefined;
    keyExtractor: ((item: Item, index: number) => string);
    /**
     * Each cell is rendered using this element. Can be a React Component Class,
     * or a render function. Defaults to using View.
     */
    CellRendererComponent?: React.ComponentType<any> | null | undefined;
    /**
     * Rendered in between each item, but not at the top or bottom. By default, `highlighted` and
     * `leadingItem` props are provided. `renderItem` provides `separators.highlight`/`unhighlight`
     * which will update the `highlighted` prop, but you can also add custom props with
     * `separators.updateProps`.
     */
    ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
    /**
     * Takes an item from `data` and renders it into the list. Example usage:
     *
     *     <FlatList
     *       ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
     *         <View style={[style.separator, highlighted && {marginLeft: 0}]} />
     *       )}
     *       data={[{title: 'Title Text', key: 'item1'}]}
     *       ListItemComponent={({item, separators}) => (
     *         <TouchableHighlight
     *           onPress={() => this._onPress(item)}
     *           onShowUnderlay={separators.highlight}
     *           onHideUnderlay={separators.unhighlight}>
     *           <View style={{backgroundColor: 'white'}}>
     *             <Text>{item.title}</Text>
     *           </View>
     *         </TouchableHighlight>
     *       )}
     *     />
     *
     * Provides additional metadata like `index` if you need it, as well as a more generic
     * `separators.updateProps` function which let's you set whatever props you want to change the
     * rendering of either the leading separator or trailing separator in case the more common
     * `highlight` and `unhighlight` (which set the `highlighted: boolean` prop) are insufficient for
     * your use-case.
     */
    ListItemComponent?: (React.ComponentType<any> | React.ReactElement<any>) | null | undefined;
    /**
     * Rendered when the list is empty. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListEmptyComponent?: (React.ComponentType<any> | React.ReactElement<any>) | null | undefined;
    /**
     * Rendered at the bottom of all the items. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListFooterComponent?: (React.ComponentType<any> | React.ReactElement<any>) | null | undefined;
    /**
     * Styling for internal View for ListFooterComponent
     */
    ListFooterComponentStyle?: ViewStyleProp;
    /**
     * Rendered at the top of all the items. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListHeaderComponent?: (React.ComponentType<any> | React.ReactElement<any>) | null | undefined;
    /**
     * Styling for internal View for ListHeaderComponent
     */
    ListHeaderComponentStyle?: ViewStyleProp;
    /**
     * A unique identifier for this list. If there are multiple VirtualizedLists at the same level of
     * nesting within another VirtualizedList, this key is necessary for virtualization to
     * work properly.
     */
    listKey?: string;
    /**
     * The maximum number of items to render in each incremental render batch. The more rendered at
     * once, the better the fill rate, but responsiveness may suffer because rendering content may
     * interfere with responding to button taps or other interactions.
     */
    maxToRenderPerBatch: number;
    /**
     * Called once when the scroll position gets within `onEndReachedThreshold` of the rendered
     * content.
     */
    onEndReached?: ((info: {
        distanceFromEnd: number;
    }) => void) | null | undefined;
    /**
     * How far from the end (in units of visible length of the list) the bottom edge of the
     * list must be from the end of the content to trigger the `onEndReached` callback.
     * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
     * within half the visible length of the list.
     */
    onEndReachedThreshold?: number | null | undefined;
    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make
     * sure to also set the `refreshing` prop correctly.
     */
    onRefresh?: (() => void) | null | undefined;
    /**
     * Used to handle failures when scrolling to an index that has not been measured yet. Recommended
     * action is to either compute your own offset and `scrollTo` it, or scroll as far as possible and
     * then try again after more items have been rendered.
     */
    onScrollToIndexFailed?: ((info: {
        index: number;
        highestMeasuredFrameIndex: number;
        averageItemLength: number;
    }) => void) | null | undefined;
    /**
     * Called when the viewability of rows changes, as defined by the
     * `viewabilityConfig` prop.
     */
    onViewableItemsChanged?: ((info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void) | null | undefined;
    persistentScrollbar?: boolean | null | undefined;
    /**
     * Set this when offset is needed for the loading indicator to show correctly.
     * @platform android
     */
    progressViewOffset?: number;
    /**
     * A custom refresh control element. When set, it overrides the default
     * <RefreshControl> component built internally. The onRefresh and refreshing
     * props are also ignored. Only works for vertical VirtualizedList.
     */
    refreshControl?: React.ReactElement<any> | null | undefined;
    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean | null | undefined;
    /**
     * Note: may have bugs (missing content) in some circumstances - use at your own risk.
     *
     * This may improve scroll performance for large lists.
     */
    removeClippedSubviews?: boolean;
    /**
     * Render a custom scroll component, e.g. with a differently styled `RefreshControl`.
     */
    renderScrollComponent?: ((props: any) => React.ReactElement<any>);
    /**
     * Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off
     * screen. Similar fill rate/responsiveness tradeoff as `maxToRenderPerBatch`.
     */
    updateCellsBatchingPeriod: number;
    /**
     * See `ViewabilityHelper` for flow type and further documentation.
     */
    viewabilityConfig?: ViewabilityConfig;
    /**
     * List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged
     * will be called when its corresponding ViewabilityConfig's conditions are met.
     */
    viewabilityConfigCallbackPairs?: Array<ViewabilityConfigCallbackPair>;
    /**
     * Determines the maximum number of items rendered outside of the visible area, in units of
     * visible lengths. So if your list fills the screen, then `windowSize={21}` (the default) will
     * render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing
     * this number will reduce memory consumption and may improve performance, but will increase the
     * chance that fast scrolling may reveal momentary blank areas of unrendered content.
     */
    windowSize: number;
    /**
     * The legacy implementation is no longer supported.
     */
    legacyImplementation?: never;
};
declare type Props = React.ElementConfig<typeof ScrollView> & RequiredProps & OptionalProps;
declare type DefaultProps = {
    disableVirtualization: boolean;
    horizontal: boolean;
    initialNumToRender: number;
    keyExtractor: ((item: Item, index: number) => string);
    maxToRenderPerBatch: number;
    onEndReachedThreshold: number;
    scrollEventThrottle: number;
    updateCellsBatchingPeriod: number;
    windowSize: number;
};
declare type Frame = {
    offset: number;
    length: number;
    index: number;
    inLayout: boolean;
};
declare type ChildListState = {
    first: number;
    last: number;
    frames: {
        [key: number]: Frame;
    };
};
declare type State = {
    first: number;
    last: number;
};
/**
 * Base implementation for the more convenient [`<FlatList>`](/react-native/docs/flatlist.html)
 * and [`<SectionList>`](/react-native/docs/sectionlist.html) components, which are also better
 * documented. In general, this should only really be used if you need more flexibility than
 * `FlatList` provides, e.g. for use with immutable data instead of plain arrays.
 *
 * Virtualization massively improves memory consumption and performance of large lists by
 * maintaining a finite render window of active items and replacing all items outside of the render
 * window with appropriately sized blank space. The window adapts to scrolling behavior, and items
 * are rendered incrementally with low-pri (after any running interactions) if they are far from the
 * visible area, or with hi-pri otherwise to minimize the potential of seeing blank space.
 *
 * Some caveats:
 *
 * - Internal state is not preserved when content scrolls out of the render window. Make sure all
 *   your data is captured in the item data or external stores like Flux, Redux, or Relay.
 * - This is a `PureComponent` which means that it will not re-render if `props` remain shallow-
 *   equal. Make sure that everything your `renderItem` function depends on is passed as a prop
 *   (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on
 *   changes. This includes the `data` prop and parent component state.
 * - In order to constrain memory and enable smooth scrolling, content is rendered asynchronously
 *   offscreen. This means it's possible to scroll faster than the fill rate ands momentarily see
 *   blank content. This is a tradeoff that can be adjusted to suit the needs of each application,
 *   and we are working on improving it behind the scenes.
 * - By default, the list looks for a `key` or `id` prop on each item and uses that for the React key.
 *   Alternatively, you can provide a custom `keyExtractor` prop.
 *
 */
declare class VirtualizedList extends React.PureComponent<Props, State> {
    props: Props;
    scrollToEnd(params?: {
        animated?: boolean | null | undefined;
    } | null | undefined): void;
    scrollToIndex(params: {
        animated?: boolean | null | undefined;
        index: number;
        viewOffset?: number;
        viewPosition?: number;
    }): void;
    scrollToItem(params: {
        animated?: boolean | null | undefined;
        item: Item;
        viewPosition?: number;
    }): void;
    /**
     * Scroll to a specific content pixel offset in the list.
     *
     * Param `offset` expects the offset to scroll to.
     * In case of `horizontal` is true, the offset is the x-value,
     * in any other case the offset is the y-value.
     *
     * Param `animated` (`true` by default) defines whether the list
     * should do an animation while scrolling.
     */
    scrollToOffset(params: {
        animated?: boolean | null | undefined;
        offset: number;
    }): void;
    recordInteraction(): void;
    flashScrollIndicators(): void;
    /**
     * Provides a handle to the underlying scroll responder.
     * Note that `this._scrollRef` might not be a `ScrollView`, so we
     * need to check that it responds to `getScrollResponder` before calling it.
     */
    getScrollResponder(): ScrollResponderType | null | undefined;
    getScrollableNode(): number | null | undefined;
    getScrollRef(): (React.ElementRef<typeof ScrollView> | null | undefined) | (React.ElementRef<typeof View> | null | undefined);
    setNativeProps(props: any): void;
    static defaultProps: DefaultProps;
    static contextTypes: any | {
        virtualizedCell: {
            cellKey: React$PropType$Primitive<string>;
        };
        virtualizedList: {
            getScrollMetrics: React$PropType$Primitive<((...args: any) => any)>;
            horizontal: React$PropType$Primitive<boolean>;
            getOutermostParentListRef: React$PropType$Primitive<((...args: any) => any)>;
            getNestedChildState: React$PropType$Primitive<((...args: any) => any)>;
            registerAsNestedChild: React$PropType$Primitive<((...args: any) => any)>;
            unregisterAsNestedChild: React$PropType$Primitive<((...args: any) => any)>;
        };
    };
    static childContextTypes: any | {
        getScrollMetrics: React$PropType$Primitive<((...args: any) => any)>;
        horizontal: React$PropType$Primitive<boolean>;
        getOutermostParentListRef: React$PropType$Primitive<((...args: any) => any)>;
        getNestedChildState: React$PropType$Primitive<((...args: any) => any)>;
        registerAsNestedChild: React$PropType$Primitive<((...args: any) => any)>;
        unregisterAsNestedChild: React$PropType$Primitive<((...args: any) => any)>;
    };
    getChildContext(): {
        virtualizedList: {
            getScrollMetrics: (() => {
                contentLength: number;
                dOffset: number;
                dt: number;
                offset: number;
                timestamp: number;
                velocity: number;
                visibleLength: number;
            });
            horizontal: boolean | null | undefined;
            getOutermostParentListRef: ((...args: any) => any);
            getNestedChildState: ((arg0: string) => ChildListState | null | undefined);
            registerAsNestedChild: ((arg0: {
                cellKey: string;
                key: string;
                ref: VirtualizedList;
            }) => ChildListState | null | undefined);
            unregisterAsNestedChild: ((arg0: {
                key: string;
                state: ChildListState;
            }) => void);
        };
    };
    _getCellKey(): string;
    _getScrollMetrics: () => {
        contentLength: number;
        dOffset: number;
        dt: number;
        offset: number;
        timestamp: number;
        velocity: number;
        visibleLength: number;
    };
    hasMore(): boolean;
    _getOutermostParentListRef: () => any;
    _getNestedChildState: (key: string) => ChildListState | null | undefined;
    _registerAsNestedChild: (childList: {
        cellKey: string;
        key: string;
        ref: VirtualizedList;
    }) => ChildListState | null | undefined;
    _unregisterAsNestedChild: (childList: {
        key: string;
        state: ChildListState;
    }) => void;
    state: State;
    constructor(props: Props, context: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(newProps: Props, prevState: State): State;
    _pushCells(cells: Array<any>, stickyHeaderIndices: Array<number>, stickyIndicesFromProps: Set<number>, first: number, last: number, inversionStyle: ViewStyleProp): void;
    _onUpdateSeparators: (keys: (string | null | undefined)[], newProps: any) => void;
    _isVirtualizationDisabled(): boolean;
    _isNestedWithSameOrientation(): boolean;
    render(): React.ReactNode;
    componentDidUpdate(prevProps: Props): void;
    _averageCellLength: number;
    _cellKeysToChildListKeys: Map<string, Set<string>>;
    _cellRefs: {};
    _fillRateHelper: FillRateHelper;
    _frames: {};
    _footerLength: number;
    _hasDataChangedSinceEndReached: boolean;
    _hasDoneInitialScroll: boolean;
    _hasInteracted: boolean;
    _hasMore: boolean;
    _hasWarned: {};
    _headerLength: number;
    _hiPriInProgress: boolean;
    _highestMeasuredFrameIndex: number;
    _indicesToKeys: Map<number, string>;
    _nestedChildLists: Map<string, {
        ref: VirtualizedList | null | undefined;
        state: ChildListState | null | undefined;
    }>;
    _offsetFromParentVirtualizedList: number;
    _prevParentOffset: number;
    _scrollMetrics: {
        contentLength: number;
        dOffset: number;
        dt: number;
        offset: number;
        timestamp: number;
        velocity: number;
        visibleLength: number;
    };
    _scrollRef: React.ElementRef<any> | null | undefined;
    _sentEndForContentLength: number;
    _totalCellLength: number;
    _totalCellsMeasured: number;
    _updateCellsToRenderBatcher: Batchinator;
    _viewabilityTuples: Array<ViewabilityHelperCallbackTuple>;
    _captureScrollRef: (ref: any) => void;
    _computeBlankness(): void;
    _defaultRenderScrollComponent: (props: any) => JSX.Element;
    _onCellLayout(e: any, cellKey: any, index: any): void;
    _onCellUnmount: (cellKey: string) => void;
    measureLayoutRelativeToContainingList(): void;
    _onLayout: (e: any) => void;
    _onLayoutEmpty: (e: any) => void;
    _onLayoutFooter: (e: any) => void;
    _onLayoutHeader: (e: any) => void;
    _renderDebugOverlay(): JSX.Element;
    _selectLength(metrics: $ReadOnly<{
        height: number;
        width: number;
    }>): number;
    _selectOffset(metrics: $ReadOnly<{
        x: number;
        y: number;
    }>): number;
    _maybeCallOnEndReached(): void;
    _onContentSizeChange: (width: number, height: number) => void;
    _convertParentScrollMetrics: (metrics: {
        visibleLength: number;
        offset: number;
    }) => {
        visibleLength: number;
        contentLength: number;
        offset: number;
        dOffset: number;
    };
    _onScroll: (e: any) => void;
    _scheduleCellsToRenderUpdate(): void;
    _onScrollBeginDrag: (e: any) => void;
    _onScrollEndDrag: (e: any) => void;
    _onMomentumScrollEnd: (e: any) => void;
    _updateCellsToRender: () => void;
    _createViewToken: (index: number, isViewable: boolean) => {
        index: number;
        item: any;
        key: string;
        isViewable: boolean;
    };
    _getFrameMetricsApprox: (index: number) => {
        length: number;
        offset: number;
    };
    _getFrameMetrics: (index: number) => {
        length: number;
        offset: number;
        index: number;
        inLayout?: boolean | undefined;
    } | null | undefined;
    _updateViewableItems(data: any): void;
}
export default VirtualizedList;
