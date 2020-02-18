import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { Category } from "../Data/YellowBoxCategory";
import { Registry } from "../Data/YellowBoxRegistry";
declare type Props = UniqueBranding & Readonly<{
    onDismiss: ((category: Category) => void);
    onDismissAll: (() => void);
    registry: Registry;
}>;
declare type State = {
    selectedCategory: Category | null | undefined;
};
declare class YellowBoxList extends React.Component<Props, State> {
    state: State;
    render(): React.ReactNode;
    _handleInspectorDismiss: () => void;
    _handleInspectorMinimize: () => void;
    _handleRowPress: (category: string) => void;
}
export default YellowBoxList;
