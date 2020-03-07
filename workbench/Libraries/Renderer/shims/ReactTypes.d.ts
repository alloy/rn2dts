import { React$Element, React$Node } from "flow-builtin-types";
type ReactNode = React$Element<any> | ReactPortal | ReactText | ReactFragment | ReactProvider<any> | ReactConsumer<any>;

type ReactEmpty = null | void | boolean;

type ReactFragment = ReactEmpty | Iterable<React$Node>;

type ReactNodeList = ReactEmpty | React$Node;

type ReactText = string | number;

type ReactProvider<T> = {
  $$typeof: Symbol | number;
  type: ReactProviderType<T>;
  key: null | string;
  ref: null;
  props: {value: T;children?: ReactNodeList;};

};

type ReactProviderType<T> = {
  $$typeof: Symbol | number;
  _context: ReactContext<T>;

};

type ReactConsumer<T> = {
  $$typeof: Symbol | number;
  type: ReactContext<T>;
  key: null | string;
  ref: null;
  props: {
    children: ((value: T) => ReactNodeList);
    unstable_observedBits?: number;

  };

};

type ReactContext<T> = {
  $$typeof: Symbol | number;
  Consumer: ReactContext<T>;
  Provider: ReactProviderType<T>;
  _calculateChangedBits: ((a: T, b: T) => number) | null;
  _currentValue: T;
  _currentValue2: T;
  _threadCount: number;
  // DEV only
  _currentRenderer?: any | null;
  _currentRenderer2?: any | null;

};

type ReactPortal = {
  $$typeof: Symbol | number;
  key: null | string;
  containerInfo: any;
  children: ReactNodeList;
  // TODO: figure out the API for cross-renderer implementation.
  implementation: any;

};

type RefObject = {current: any;};

type ReactEventResponderInstance<E, C> = {
  fiber: any;
  props: any;
  responder: ReactEventResponder<E, C>;
  rootEventTypes: null | Set<string>;
  state: any;
};

type ReactEventResponderListener<E, C> = {
  props: any;
  responder: ReactEventResponder<E, C>;
};

type ReactEventResponder<E, C> = {
  $$typeof: Symbol | number;
  displayName: string;
  targetEventTypes: null | Array<string>;
  targetPortalPropagation: boolean;
  rootEventTypes: null | Array<string>;
  getInitialState: null | ((props: any) => any);
  onEvent: null | ((event: E, context: C, props: any, state: any) => void);
  onRootEvent: null | ((event: E, context: C, props: any, state: any) => void);
  onMount: null | ((context: C, props: any, state: any) => void);
  onUnmount: null | ((context: C, props: any, state: any) => void);

};

type EventPriority = 0 | 1 | 2;

declare var DiscreteEvent: EventPriority;
declare var UserBlockingEvent: EventPriority;
declare var ContinuousEvent: EventPriority;

type ReactFundamentalComponentInstance<C, H> = {
  currentFiber: unknown;
  instance: unknown;
  prevProps: null | any;
  props: any;
  impl: ReactFundamentalImpl<C, H>;
  state: any;
};

type ReactFundamentalImpl<C, H> = {
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

type ReactFundamentalComponent<C, H> = {
  $$typeof: Symbol | number;
  impl: ReactFundamentalImpl<C, H>;
};

type ReactScope = {$$typeof: Symbol | number;};

type ReactScopeQuery = ((type: string, props: {
  [key: string]: unknown;
}, instance: unknown) => boolean);

type ReactScopeMethods = {
  DO_NOT_USE_queryAllNodes(arg0: ReactScopeQuery): null | Array<any>;
  DO_NOT_USE_queryFirstNode(arg0: ReactScopeQuery): null | any;
  containsNode(arg0: any): boolean;
  getChildContextValues: (<T>(context: ReactContext<T>) => Array<T>);
};

type ReactScopeInstance = {fiber: any;methods: null | ReactScopeMethods;};
export { ReactNode };

export { ReactEmpty };

export { ReactFragment };

export { ReactNodeList };

export { ReactText };

export { ReactProvider };

export { ReactProviderType };

export { ReactConsumer };

export { ReactContext };

export { ReactPortal };

export { RefObject };

export { ReactEventResponderInstance };

export { ReactEventResponderListener };

export { ReactEventResponder };

export { EventPriority };

export { DiscreteEvent };
export { UserBlockingEvent };
export { ContinuousEvent };

export { ReactFundamentalComponentInstance };

export { ReactFundamentalImpl };

export { ReactFundamentalComponent };

export { ReactScope };

export { ReactScopeQuery };

export { ReactScopeMethods };

export { ReactScopeInstance };