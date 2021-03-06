declare function mapWithSeparator<TFrom, TTo>(items: Array<TFrom>, itemRenderer: ((item: TFrom, index: number, items: Array<TFrom>) => TTo), spacerRenderer: ((index: number) => TTo)): Array<TTo>;
export default mapWithSeparator;
