import React from 'react';
import VirtualizedList from './VirtualizedList';
import { ViewToken } from "./ViewabilityHelper";
import { Props as VirtualizedListProps } from "./VirtualizedList";
declare type Item = any;
export declare type SectionBase<SectionItemT> = {
    /**
     * The data for rendering items in this section.
     */
    data: ReadonlyArray<SectionItemT>;
    /**
     * Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections,
     * the array index will be used by default.
     */
    key?: string;
    renderItem?: ((info: {
        item: SectionItemT;
        index: number;
        section: SectionBase<SectionItemT>;
        separators: {
            highlight: (() => void);
            unhighlight: (() => void);
            updateProps: ((select: "leading" | "trailing", newProps: any) => void);
        };
    }) => React.ReactElement<any> | null | undefined) | null | undefined;
    ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
    keyExtractor?: ((item: SectionItemT, index?: number | null | undefined) => string);
};
declare type RequiredProps<SectionT extends SectionBase<any>> = {
    sections: ReadonlyArray<SectionT>;
};
declare type OptionalProps<SectionT extends SectionBase<any>> = {
    /**
     * Rendered after the last item in the last section.
     */
    ListFooterComponent?: (React.ComponentType<any> | React.ReactElement<any>) | null | undefined;
    /**
     * Rendered at the very beginning of the list.
     */
    ListHeaderComponent?: (React.ComponentType<any> | React.ReactElement<any>) | null | undefined;
    /**
     * Default renderer for every item in every section.
     */
    renderItem?: ((info: {
        item: Item;
        index: number;
        section: SectionT;
        separators: {
            highlight: (() => void);
            unhighlight: (() => void);
            updateProps: ((select: "leading" | "trailing", newProps: any) => void);
        };
    }) => React.ReactElement<any> | null | undefined);
    /**
     * Rendered at the top of each section.
     */
    renderSectionHeader?: ((arg0: {
        section: SectionT;
    }) => React.ReactElement<any> | null | undefined) | null | undefined;
    /**
     * Rendered at the bottom of each section.
     */
    renderSectionFooter?: ((arg0: {
        section: SectionT;
    }) => React.ReactElement<any> | null | undefined) | null | undefined;
    /**
     * Rendered at the bottom of every Section, except the very last one, in place of the normal
     * ItemSeparatorComponent.
     */
    SectionSeparatorComponent?: React.ComponentType<any> | null | undefined;
    /**
     * Rendered at the bottom of every Item except the very last one in the last section.
     */
    ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
    /**
     * DEPRECATED: Virtualization provides significant performance and memory optimizations, but fully
     * unmounts react instances that are outside of the render window. You should only need to disable
     * this for debugging purposes.
     */
    disableVirtualization?: boolean | null | undefined;
    keyExtractor: ((item: Item, index: number) => string);
    onEndReached?: ((arg0: {
        distanceFromEnd: number;
    }) => void) | null | undefined;
    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make
     * sure to also set the `refreshing` prop correctly.
     */
    onRefresh?: (() => void) | null | undefined;
    /**
     * Called when the viewability of rows changes, as defined by the
     * `viewabilityConfig` prop.
     */
    onViewableItemsChanged?: ((arg0: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void) | null | undefined;
    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean | null | undefined;
};
export declare type Props<SectionT> = RequiredProps<SectionT> & OptionalProps<SectionT> & VirtualizedListProps;
export declare type ScrollToLocationParamsType = {
    animated?: boolean | null | undefined;
    itemIndex: number;
    sectionIndex: number;
    viewOffset?: number;
    viewPosition?: number;
};
declare type DefaultProps = typeof VirtualizedList.defaultProps & {
    data: ReadonlyArray<Item>;
};
declare type State = {
    childProps: VirtualizedListProps;
};
/**
 * Right now this just flattens everything into one list and uses VirtualizedList under the
 * hood. The only operation that might not scale well is concatting the data arrays of all the
 * sections when new props are received, which should be plenty fast for up to ~10,000 items.
 */
declare class VirtualizedSectionList<SectionT extends SectionBase<any>> extends React.PureComponent<Props<SectionT>, State> {
    static defaultProps: DefaultProps;
    scrollToLocation(params: ScrollToLocationParamsType): void;
    getListRef(): VirtualizedList;
    constructor(props: Props<SectionT>, context: any);
    UNSAFE_componentWillReceiveProps(nextProps: Props<SectionT>): void;
    _computeState(props: Props<SectionT>): State;
    render(): React.ReactNode;
    _keyExtractor: (item: any, index: number) => string;
    _subExtractor(index: number): {
        section: SectionT;
        key: string;
        index: number | null | undefined;
        header?: boolean | null | undefined;
        leadingItem?: Item | null | undefined;
        leadingSection?: SectionT | null | undefined;
        trailingItem?: Item | null | undefined;
        trailingSection?: SectionT | null | undefined;
    } | null | undefined;
    _convertViewable: (viewable: ViewToken) => ViewToken | null | undefined;
    _onViewableItemsChanged: ({ viewableItems, changed }: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => void;
    _renderItem: ({ item, index }: {
        item: any;
        index: number;
    }) => JSX.Element | null | undefined;
    _onUpdateSeparator: (key: string, newProps: any) => void;
    _getSeparatorComponent(index: number, info?: any | null | undefined): React.ComponentType<any> | null | undefined;
    _cellRefs: {};
    _listRef: VirtualizedList;
    _captureRef: (ref: any) => void;
}
export default VirtualizedSectionList;
