import { React$Element, React$Node } from "flow-builtin-types";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
export declare type ReactNode = React$Element<any> | ReactPortal | ReactText | ReactFragment | ReactProvider<any> | ReactConsumer<any>;
export declare type ReactEmpty = null | void | boolean;
export declare type ReactFragment = ReactEmpty | Iterable<React$Node>;
export declare type ReactNodeList = ReactEmpty | React$Node;
export declare type ReactText = string | number;
export declare type ReactProvider<T> = {
    $$typeof: Symbol | number;
    type: ReactProviderType<T>;
    key: null | string;
    ref: null;
    props: {
        value: T;
        children?: ReactNodeList;
    };
};
export declare type ReactProviderType<T> = {
    $$typeof: Symbol | number;
    _context: ReactContext<T>;
};
export declare type ReactConsumer<T> = {
    $$typeof: Symbol | number;
    type: ReactContext<T>;
    key: null | string;
    ref: null;
    props: {
        children: ((value: T) => ReactNodeList);
        unstable_observedBits?: number;
    };
};
export declare type ReactContext<T> = {
    $$typeof: Symbol | number;
    Consumer: ReactContext<T>;
    Provider: ReactProviderType<T>;
    _calculateChangedBits: ((a: T, b: T) => number) | null;
    _currentValue: T;
    _currentValue2: T;
    _threadCount: number;
    _currentRenderer?: any | null;
    _currentRenderer2?: any | null;
};
export declare type ReactPortal = {
    $$typeof: Symbol | number;
    key: null | string;
    containerInfo: any;
    children: ReactNodeList;
    implementation: any;
};
export declare type RefObject = {
    current: any;
};
export declare type ReactEventResponderInstance<E, C> = {
    fiber: any;
    props: any;
    responder: ReactEventResponder<E, C>;
    rootEventTypes: null | Set<string>;
    state: any;
    target: unknown;
};
export declare type ReactEventResponderListener<E, C> = {
    props: any;
    responder: ReactEventResponder<E, C>;
};
export declare type ReactEventResponder<E, C> = {
    $$typeof: Symbol | number;
    displayName: string;
    targetEventTypes: null | Array<string>;
    rootEventTypes: null | Array<string>;
    getInitialState: null | ((props: any) => any);
    onEvent: null | ((event: E, context: C, props: any, state: any) => void);
    onRootEvent: null | ((event: E, context: C, props: any, state: any) => void);
    onMount: null | ((context: C, props: any, state: any) => void);
    onUnmount: null | ((context: C, props: any, state: any) => void);
    onOwnershipChange: null | ((context: C, props: any, state: any) => void);
};
export declare type EventPriority = 0 | 1 | 2;
export declare const DiscreteEvent: EventPriority;
export declare const UserBlockingEvent: EventPriority;
export declare const ContinuousEvent: EventPriority;
export declare type ReactFundamentalComponentInstance<C, H> = {
    currentFiber: unknown;
    instance: unknown;
    prevProps: null | any;
    props: any;
    impl: ReactFundamentalImpl<C, H>;
    state: any;
};
export declare type ReactFundamentalImpl<C, H> = {
    displayName: string;
    reconcileChildren: boolean;
    getInitialState?: ((props: any) => any);
    getInstance: ((context: C, props: any, state: any) => H);
    getServerSideString?: ((context: C, props: any) => string);
    getServerSideStringClose?: ((context: C, props: any) => string);
    onMount: ((context: C, instance: unknown, props: any, state: any) => void);
    shouldUpdate?: ((context: C, prevProps: null | any, nextProps: any, state: any) => boolean);
    onUpdate?: ((context: C, instance: unknown, prevProps: null | any, nextProps: any, state: any) => void);
    onUnmount?: ((context: C, instance: unknown, props: any, state: any) => void);
    onHydrate?: ((context: C, props: any, state: any) => boolean);
    onFocus?: ((context: C, props: any, state: any) => boolean);
};
export declare type ReactFundamentalComponent<C, H> = {
    $$typeof: Symbol | number;
    impl: ReactFundamentalImpl<C, H>;
};
