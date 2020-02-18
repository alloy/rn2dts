import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = UniqueBranding & Readonly<{
    backgroundColor: UniqueBranding & Readonly<{
        default: string;
        pressed: string;
    }>;
    children?: React.ReactNode;
    hitSlop?: EdgeInsetsProp | null | undefined;
    onPress?: ((event: PressEvent) => void) | null | undefined;
    style?: ViewStyleProp;
}>;
declare function LogBoxButton(props: Props): React.ReactNode;
export default LogBoxButton;
