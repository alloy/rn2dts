export declare type PlatformSelectSpec<D, I> = {
    default?: D;
    ios?: I;
};
declare const Platform: {
    __constants: null;
    OS: string;
    readonly Version: any;
    readonly constants: {
        forceTouchAvailable: boolean;
        interfaceIdiom: string;
        isTesting: boolean;
        osVersion: string;
        reactNativeVersion: {
            major: number;
            minor: number;
            patch: number;
            prerelease: number | null | undefined;
        };
        systemName: string;
    };
    readonly isPad: boolean;
    /**
     * Deprecated, use `isTV` instead.
     */
    readonly isTVOS: boolean;
    readonly isTV: boolean;
    readonly isTesting: boolean;
    select: <D, I>(spec: PlatformSelectSpec<D, I>) => D | I;
};
export default Platform;
