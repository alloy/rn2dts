import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { Registry } from "./Data/YellowBoxRegistry";
declare type Props = UniqueBranding & Readonly<{}>;
declare type State = UniqueBranding & Readonly<{
    registry: Registry | null | undefined;
}>;
declare class YellowBoxContainer extends React.Component<Props, State> {
    state: State;
    render(): React.ReactNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export default YellowBoxContainer;
