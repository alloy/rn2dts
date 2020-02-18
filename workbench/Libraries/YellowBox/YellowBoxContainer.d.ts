import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { Registry, Subscription } from "./Data/YellowBoxRegistry";
declare type Props = UniqueBranding & Readonly<{}>;
declare type State = UniqueBranding & Readonly<{
    registry: Registry | null | undefined;
}>;
declare class YellowBoxContainer extends React.Component<Props, State> {
    _subscription: Subscription | null | undefined;
    state: State;
    render(): React.ReactNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _handleDismiss: (category: string) => void;
    _handleDismissAll(): void;
}
export default YellowBoxContainer;
