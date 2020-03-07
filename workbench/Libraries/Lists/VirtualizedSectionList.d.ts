import { $PropertyType, $Diff } from "utility-types";
const React = require("react");

const VirtualizedList = require("./VirtualizedList");

type Item = any;

type SectionBase<SectionItemT> = {

  /**
     * The data for rendering items in this section.
     */
  data: ReadonlyArray<SectionItemT>;

  /**
     * Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections,
     * the array index will be used by default.
     */
  key?: string;
  // Optional props will override list-wide props just for this section.
  renderItem?: ((info: {
    item: SectionItemT;
    index: number;
    section: SectionBase<SectionItemT>;
    separators: {
      highlight: (() => void);
      unhighlight: (() => void);
      updateProps: ((select: "leading" | "trailing", newProps: any) => void);

    };

  }) => null | React.ReactElement<any>) | null | undefined;
  ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
  keyExtractor?: ((item: SectionItemT, index?: number | null | undefined) => string);

};

type RequiredProps<SectionT extends SectionBase<any>> = {
  sections: ReadonlyArray<SectionT>;
};

type OptionalProps<SectionT extends SectionBase<any>> = {

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

  }) => null | React.ReactElement<any>);

  /**
     * Rendered at the top of each section. These stick to the top of the `ScrollView` by default on
     * iOS. See `stickySectionHeadersEnabled`.
     */
  renderSectionHeader?: ((info: {section: SectionT;}) => null | React.ReactElement<any>) | null | undefined;

  /**
     * Rendered at the bottom of each section.
     */
  renderSectionFooter?: ((info: {section: SectionT;}) => null | React.ReactElement<any>) | null | undefined;

  /**
     * Rendered at the top and bottom of each section (note this is different from
     * `ItemSeparatorComponent` which is only rendered between items). These are intended to separate
     * sections from the headers above and below and typically have the same highlight response as
     * `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Separator]`,
     * and any custom props from `separators.updateProps`.
     */
  SectionSeparatorComponent?: React.ComponentType<any> | null | undefined;

  /**
     * Makes section headers stick to the top of the screen until the next one pushes it off. Only
     * enabled by default on iOS because that is the platform standard there.
     */
  stickySectionHeadersEnabled?: boolean;
  onEndReached?: ((arg0: {distanceFromEnd: number;}) => void) | null | undefined;
};

type VirtualizedListProps = React.ElementProps<typeof VirtualizedList>;

type Props<SectionT> = RequiredProps<SectionT> & OptionalProps<SectionT> & $Diff<VirtualizedListProps, {renderItem: $PropertyType<VirtualizedListProps, "renderItem">;}>;
type ScrollToLocationParamsType = {
  animated?: boolean | null | undefined;
  itemIndex: number;
  sectionIndex: number;
  viewOffset?: number;
  viewPosition?: number;
};

type DefaultProps = typeof VirtualizedList.defaultProps & {
  data: ReadonlyArray<Item>;
};

type State = {childProps: VirtualizedListProps;};

declare class VirtualizedSectionList<SectionT extends SectionBase<any>> extends React.PureComponent<Props<SectionT>, State> {
  defaultProps: DefaultProps;
  scrollToLocation(params: ScrollToLocationParamsType): void;
  getListRef(): VirtualizedList;
  constructor(props: Props<SectionT>, context: any): void;
  UNSAFE_componentWillReceiveProps(nextProps: Props<SectionT>): void;
  render(): React.ReactNode;
}
export { SectionBase };

export { Props };
export { ScrollToLocationParamsType };

declare module.exports: typeof VirtualizedSectionList