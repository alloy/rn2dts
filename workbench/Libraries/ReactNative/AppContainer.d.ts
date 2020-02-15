import EmitterSubscription from '../vendor/emitter/EmitterSubscription';
import React from 'react';
import View from '../Components/View/View';
import { React$PropType$Primitive } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
declare type Context = {
    rootTag: number;
};
declare type Props = $ReadOnly<{
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
    _mainRef: React.ElementRef<typeof View> | null | undefined;
    _subscription: EmitterSubscription | null | undefined;
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
