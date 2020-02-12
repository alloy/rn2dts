export declare type PlatformSelectSpec<A, D> = {
    android?: A;
    default?: D;
};
declare const Platform: {
    __constants: null;
    OS: string;
    readonly Version: any;
    readonly constants: any;
    readonly isTesting: boolean;
    readonly isTV: boolean;
    select: <A, D>(spec: PlatformSelectSpec<A, D>) => A | D;
};
export default Platform;
