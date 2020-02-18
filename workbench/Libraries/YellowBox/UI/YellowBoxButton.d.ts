import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
declare type Props = UniqueBranding & Readonly<{
    hitSlop?: EdgeInsetsProp | null | undefined;
    label: string;
    onPress: (() => void);
}>;
declare const YellowBoxButton: (props: Props) => React.ReactNode;
export default YellowBoxButton;
