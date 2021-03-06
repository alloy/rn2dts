/**
 * Used to find the indices of the frames that overlap the given offsets. Useful for finding the
 * items that bound different windows of content, such as the visible area or the buffered overscan
 * area.
 */
declare function elementsThatOverlapOffsets(offsets: Array<number>, itemCount: number, getFrameMetrics: ((index: number) => {
    length: number;
    offset: number;
})): Array<number>;
/**
 * Computes the number of elements in the `next` range that are new compared to the `prev` range.
 * Handy for calculating how many new items will be rendered when the render window changes so we
 * can restrict the number of new items render at once so that content can appear on the screen
 * faster.
 */
declare function newRangeCount(prev: {
    first: number;
    last: number;
}, next: {
    first: number;
    last: number;
}): number;
/**
 * Custom logic for determining which items should be rendered given the current frame and scroll
 * metrics, as well as the previous render state. The algorithm may evolve over time, but generally
 * prioritizes the visible area first, then expands that with overscan regions ahead and behind,
 * biased in the direction of scroll.
 */
declare function computeWindowedRenderLimits(props: {
    data: any;
    getItemCount: ((data: any) => number);
    maxToRenderPerBatch: number;
    windowSize: number;
}, prev: {
    first: number;
    last: number;
}, getFrameMetricsApprox: ((index: number) => {
    length: number;
    offset: number;
}), scrollMetrics: {
    dt: number;
    offset: number;
    velocity: number;
    visibleLength: number;
}): {
    first: number;
    last: number;
};
declare const VirtualizeUtils: {
    computeWindowedRenderLimits: typeof computeWindowedRenderLimits;
    elementsThatOverlapOffsets: typeof elementsThatOverlapOffsets;
    newRangeCount: typeof newRangeCount;
};
export default VirtualizeUtils;
