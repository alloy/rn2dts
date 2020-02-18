import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
declare type Props = UniqueBranding & Readonly<{
    hierarchy: Array<{
        name: string;
    }>;
    style?: ViewStyleProp | null | undefined;
    source?: {
        fileName?: string;
        lineNumber?: number;
    } | null | undefined;
    frame?: any | null | undefined;
    selection?: number | null | undefined;
    setSelection?: ((arg0: number) => unknown);
}>;
declare class ElementProperties extends React.Component<Props> {
    render(): React.ReactNode;
}
export default ElementProperties;
