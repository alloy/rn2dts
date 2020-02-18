import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
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
declare class YellowBoxPressable extends React.Component<Props> {
    static defaultProps: {
        backgroundColor: {
            default: string;
            pressed: string;
        };
    };
}
export default YellowBoxPressable;
