class NotAComponent {
    constructor(a: any) {}
    render(): any {}
}

class ComponentWithoutProps extends React.Component {
    render(): any {}
}

class ComponentWithProps extends React.Component<Props> {
    render(): any {}
}

class ScrollView extends React.Component<Props, State> {
    static defaultProps: { foo: 42 };
    static displayName = "ScrollView";
    
    props: Props;
    state: State;

    static getDerivedStateFromProps(props, state) {}

    static contextTypes: any | {
        rootTag: React$PropType$Primitive<number>;
    };
    static childContextTypes: any | {
        virtualizedList: React$PropType$Primitive<any>;
    };
    getChildContext() {}

    constructor(props: Props) {
        super(props)
    }

    UNSAFE_componentWillMount(): void {}
    UNSAFE_componentWillUpdate(): void {}
    UNSAFE_componentWillReceiveProps(nextProps: Props): void {}

    componentDidMount(): void {}
    componentDidUpdate(): void {}
    componentWillUnmount(): void {}
    componentDidCatch(): void {}
    shouldComponentUpdate(): boolean {}

    setNativeProps(props: {
        [key: string]: unknown;
    }): void {}

    /**
     * Returns a reference to the underlying scroll responder, which supports
     * operations like `scrollTo`. All ScrollView-like components should
     * implement this method so that they can be composed while providing access
     * to the underlying scroll responder's methods.
     */
    getScrollResponder(): ScrollResponderType {}
    getScrollableNode(): number | null | undefined {}
    getInnerViewNode(): number | null | undefined {}
    getInnerViewRef(): React.ElementRef<HostComponent<unknown>> | null | undefined {}
    getNativeScrollRef(): React.ElementRef<HostComponent<unknown>> | null | undefined {}
    /**
     * Scrolls to a given x, y offset, either immediately or with a smooth animation.
     *
     * Example:
     *
     * `scrollTo({x: 0, y: 0, animated: true})`
     *
     * Note: The weird function signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as an alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    scrollTo(options?: {
        x?: number;
        y?: number;
        animated?: boolean;
    } | number, deprecatedX?: number, deprecatedAnimated?: boolean): void {}
    /**
     * If this is a vertical ScrollView scrolls to the bottom.
     * If this is a horizontal ScrollView scrolls to the right.
     *
     * Use `scrollToEnd({animated: true})` for smooth animated scrolling,
     * `scrollToEnd({animated: false})` for immediate scrolling.
     * If no options are passed, `animated` defaults to true.
     */
    scrollToEnd(options?: {
        animated?: boolean;
    } | null | undefined): void {}
    /**
     * Displays the scroll indicators momentarily.
     *
     * @platform ios
     */
    flashScrollIndicators(): void {}

    render(): React.ReactNode | React.ReactElement<string> {}
}
