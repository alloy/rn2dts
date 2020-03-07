import { UniqueBranding } from "flow-builtin-types";
const React = require("react");

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

declare var RefreshLayoutConsts: any;

type IOSProps = UniqueBranding & Readonly<{

  /**
     * The color of the refresh indicator.
     */
  tintColor?: ColorValue | null | undefined;

  /**
     * Title color.
     */
  titleColor?: ColorValue | null | undefined;

  /**
     * The title displayed under the refresh indicator.
     */
  title?: string | null | undefined;
}>;

type AndroidProps = UniqueBranding & Readonly<{

  /**
     * Whether the pull to refresh functionality is enabled.
     */
  enabled?: boolean | null | undefined;

  /**
     * The colors (at least one) that will be used to draw the refresh indicator.
     */
  colors?: ReadonlyArray<ColorValue> | null | undefined;

  /**
     * The background color of the refresh indicator.
     */
  progressBackgroundColor?: ColorValue | null | undefined;

  /**
     * Size of the refresh indicator, see RefreshControl.SIZE.
     */
  size?: (typeof RefreshLayoutConsts.SIZE.DEFAULT | typeof RefreshLayoutConsts.SIZE.LARGE) | null | undefined;

  /**
     * Progress view top offset
     */
  progressViewOffset?: number | null | undefined;
}>;

type RefreshControlProps = UniqueBranding & Readonly<ViewProps & IOSProps & AndroidProps & {
  /**
     * Called when the view starts refreshing.
     */
  onRefresh?: (() => void) | null | undefined;

  /**
     * Whether the view should be indicating an active refresh.
     */
  refreshing: boolean;
}>;

declare class RefreshControl extends React.Component<RefreshControlProps> {
  SIZE: any;
  componentDidMount(): void;
  componentDidUpdate(prevProps: RefreshControlProps): void;
  render(): React.ReactNode;
}
export { RefreshControlProps };

declare module.exports: typeof RefreshControl