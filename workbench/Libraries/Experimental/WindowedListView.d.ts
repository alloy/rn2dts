import Batchinator from '../Interaction/Batchinator';
import React from 'react';
import ScrollView from '../Components/ScrollView/ScrollView';
import ViewabilityHelper from '../Lists/ViewabilityHelper';
import { $TEMPORARY$object } from "flow-builtin-types";
/**
 * An experimental ListView implementation designed for efficient memory usage
 * when rendering huge/infinite lists. It works by rendering a subset of rows
 * and replacing offscreen rows with an empty spacer, which means that it has to
 * re-render rows when scrolling back up.
 *
 * Note that rows must be the same height when they are re-mounted as when they
 * are unmounted otherwise the content will jump around. This means that any
 * state that affects the height, such as tap to expand, should be stored
 * outside the row component to maintain continuity.
 *
 * This is not a drop-in replacement for `ListView` - many features are not
 * supported, including section headers, dataSources, horizontal layout, etc.
 *
 * Row data should be provided as a simple array corresponding to rows.  `===`
 * is used to determine if a row has changed and should be re-rendered.
 *
 * Rendering is done incrementally one row at a time to minimize the amount of
 * work done per JS event tick. Individual rows can also use <Incremental>
 * to further break up the work and keep the app responsive and improve scroll
 * perf if rows get exceedingly complex.
 *
 * Note that it's possible to scroll faster than rows can be rendered. Instead
 * of showing the user a bunch of un-mounted blank space, WLV sets contentInset
 * to prevent scrolling into unrendered areas. Supply the
 * `renderWindowBoundaryIndicator` prop to indicate the boundary to the user,
 * e.g. with a row placeholder.
 */
declare type Props = {
    /**
     * A simple array of data blobs that are passed to the renderRow function in
     * order. Note there is no dataSource like in the standard `ListView`.
     */
    data: Array<{
        rowKey: string;
        rowData: any;
    }>;
    /**
     * Takes a data blob from the `data` array prop plus some meta info and should
     * return a row.
     */
    renderRow: ((rowData: any, sectionIdx: number, rowIdx: number, rowKey: string) => React.ReactElement<any> | null | undefined);
    /**
     * Rendered when the list is scrolled faster than rows can be rendered.
     */
    renderWindowBoundaryIndicator?: ((showIndicator: boolean) => React.ReactElement<any> | null | undefined);
    /**
     * Always rendered at the bottom of all the rows.
     */
    renderFooter?: ((showFooter: boolean) => React.ReactElement<any> | null | undefined);
    /**
     * Pipes through normal onScroll events from the underlying `ScrollView`.
     */
    onScroll?: ((event: any) => void);
    /**
     * Called when the rows that are visible in the viewport change.
     */
    onVisibleRowsChanged?: ((firstIdx: number, count: number) => void);
    /**
     * Called when the viewability of rows changes, as defined by the
     * `viewablePercentThreshold` prop.
     */
    onViewableRowsChanged?: ((viewableRows: Array<number>) => void);
    /**
     * The percent of a row that must be visible to consider it "viewable".
     */
    viewablePercentThreshold: number;
    /**
     * Number of rows to render on first mount.
     */
    initialNumToRender: number;
    /**
     * Maximum number of rows to render while scrolling, i.e. the window size.
     */
    maxNumToRender: number;
    /**
     * Number of rows to render beyond the viewport. Note that this combined with
     * `maxNumToRender` and the number of rows that can fit in one screen will
     * determine how many rows to render above the viewport.
     */
    numToRenderAhead: number;
    /**
     * Used to log perf events for async row rendering.
     */
    asyncRowPerfEventName?: string;
    /**
     * A function that returns the scrollable component in which the list rows
     * are rendered. Defaults to returning a ScrollView with the given props.
     */
    renderScrollComponent: ((props: any | null | undefined) => React.ReactElement<any>);
    /**
     * Use to disable incremental rendering when not wanted, e.g. to speed up initial render.
     */
    disableIncrementalRendering: boolean;
    /**
     * This determines how frequently events such as scroll and layout can trigger a re-render.
     */
    recomputeRowsBatchingPeriod: number;
    /**
     * Called when rows will be mounted/unmounted. Mounted rows always form a contiguous block so it
     * is expressed as a range of start plus count.
     */
    onMountedRowsWillChange?: ((firstIdx: number, count: number) => void);
    /**
     * Change this when you want to make sure the WindowedListView will re-render, for example when
     * the result of `renderScrollComponent` might change. It will be compared in
     * `shouldComponentUpdate`.
     */
    shouldUpdateToken?: string;
};
declare type State = {
    boundaryIndicatorHeight?: number;
    firstRow: number;
    lastRow: number;
};
declare class WindowedListView extends React.Component<Props, State> {
    /**
     * Recomputing which rows to render is batched up and run asynchronously to avoid wasteful updates,
     * e.g. from multiple layout updates in rapid succession.
     */
    _computeRowsToRenderBatcher: Batchinator;
    _firstVisible: number;
    _lastVisible: number;
    _scrollOffsetY: number;
    _isScrolling: boolean;
    _frameHeight: number;
    _rowFrames: {
        [key: string]: any;
    };
    _rowRenderMode: {
        [key: string]: null | "async" | "sync";
    };
    _rowFramesDirty: boolean;
    _hasCalledOnEndReached: boolean;
    _willComputeRowsToRender: boolean;
    _viewableRows: Array<number>;
    _cellsInProgress: Set<string>;
    _scrollRef: ScrollView | null | undefined;
    _viewabilityHelper: ViewabilityHelper;
    static defaultProps: $TEMPORARY$object<{
        disableIncrementalRendering: boolean;
        initialNumToRender: number;
        maxNumToRender: number;
        numToRenderAhead: number;
        recomputeRowsBatchingPeriod: number;
        renderScrollComponent: ((props: any) => React.ReactNode);
        viewablePercentThreshold: number;
    }>;
    constructor(props: Props);
    getScrollResponder(): ScrollView | null | undefined;
    shouldComponentUpdate(newProps: Props, newState: State): boolean;
    UNSAFE_componentWillReceiveProps(): void;
    _onMomentumScrollEnd: (e: any) => void;
    _getFrameMetrics: (index: number) => {
        length: number;
        offset: number;
    } | null | undefined;
    _onScroll: (e: any) => void;
    _onNewLayout: (params: {
        rowKey: string;
        layout: any;
    }) => void;
    _onWillUnmountCell: (rowKey: string) => void;
    /**
     * This is used to keep track of cells that are in the process of rendering. If any cells are in
     * progress, then other updates are skipped because they will just be wasted work.
     */
    _onProgressChange: ({ rowKey, inProgress }: {
        rowKey: string;
        inProgress: boolean;
    }) => void;
    componentWillUnmount(): void;
    _computeRowsToRender(props: any): void;
    _updateVisibleRows(newFirstVisible: number, newLastVisible: number): void;
    render(): React.ReactNode;
}
export default WindowedListView;
