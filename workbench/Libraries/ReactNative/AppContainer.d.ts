import React from 'react';
import { UniqueBranding, React$PropType$Primitive } from "flow-builtin-types";
declare type Context = {
    rootTag: number;
};
declare type Props = UniqueBranding & Readonly<{
    children?: React.ReactNode;
    fabric?: boolean;
    rootTag: number;
    showArchitectureIndicator?: boolean;
    WrapperComponent?: React.ComponentType<any> | null | undefined;
    internal_excludeLogBox?: boolean | null | undefined;
}>;
declare type State = {
    inspector: React.ReactNode | null | undefined;
    mainKey: number;
    hasError: boolean;
};
declare class AppContainer extends React.Component<Props, State> {
    state: State;
    static getDerivedStateFromError: any;
    static childContextTypes: any | {
        rootTag: React$PropType$Primitive<number>;
    };
    getChildContext(): Context;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default AppContainer;
