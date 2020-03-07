import { UniqueBranding } from "flow-builtin-types";
import { DirectEventHandler } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = UniqueBranding & Readonly<ViewProps & {
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
  title?: WithDefault<string, null>;

  /**
     * Called when the view starts refreshing.
     */
  onRefresh?: DirectEventHandler<null> | null | undefined;

  /**
     * Whether the view should be indicating an active refresh.
     */
  refreshing: boolean;
}>;

type ComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeRefreshing: ((viewRef: React.ElementRef<ComponentType>, refreshing: boolean) => void);
}

declare var Commands: NativeCommands;
export { Commands };

export default HostComponent<NativeProps>;