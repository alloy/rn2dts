import EmitterSubscription from '../vendor/emitter/EmitterSubscription';
import React from 'react';
import View from '../Components/View/View';
import { React$PropType$Primitive, $TEMPORARY$object } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
declare type Context = {
    rootTag: number;
};
declare type Props = $ReadOnly<{
    children?: React.ReactNode;
    rootTag: number;
    WrapperComponent?: React.ComponentType<any> | null | undefined;
}>;
declare type State = {
    inspector: React.ReactNode | null | undefined;
    mainKey: number;
};
declare class AppContainer extends React.Component<Props, State> {
    state: State;
    _mainRef: React.ElementRef<typeof View> | null | undefined;
    _subscription: EmitterSubscription | null | undefined;
    static childContextTypes: any | $TEMPORARY$object<{
        rootTag: React$PropType$Primitive<number>;
    }>;
    getChildContext(): Context;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default AppContainer;
