import React from 'react';
import { $TEMPORARY$object } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = $ReadOnly<{
    backgroundColor: $ReadOnly<{
        default: string;
        pressed: string;
    }>;
    children?: React.ReactNode;
    hitSlop?: EdgeInsetsProp | null | undefined;
    onPress?: ((event: PressEvent) => void) | null | undefined;
    style?: ViewStyleProp;
}>;
declare type State = {
    pressed: boolean;
};
declare class YellowBoxPressable extends React.Component<Props, State> {
    static defaultProps: $TEMPORARY$object<{
        backgroundColor: $TEMPORARY$object<{
            default: string;
            pressed: string;
        }>;
    }>;
    state: State;
    render(): React.ReactNode;
    _handlePressIn: () => void;
    _handlePressOut: () => void;
}
export default YellowBoxPressable;
