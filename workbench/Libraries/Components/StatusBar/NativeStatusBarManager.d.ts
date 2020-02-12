import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {
        readonly HEIGHT: number;
        readonly DEFAULT_BACKGROUND_COLOR: number;
    });
    readonly setColor: ((color: number, animated: boolean) => void);
    readonly setTranslucent: ((translucent: boolean) => void);
    readonly getHeight: ((callback: ((result: {
        height: number;
    }) => void)) => void);
    readonly setNetworkActivityIndicatorVisible: ((visible: boolean) => void);
    readonly addListener: ((eventType: string) => void);
    readonly removeListeners: ((count: number) => void);
    /**
     *  - animated is iOS only
     *  - statusBarStyles can be:
     *    - 'default' (iOS and Android)
     *    - 'dark-content' (iOS and Android)
     *    - 'light-content' (iOS)
     */
    readonly setStyle: ((statusBarStyle?: string | null | undefined, animated?: boolean | null | undefined) => void);
    /**
     *  - withAnimation is iOS only
     *  - withAnimation can be: 'none' | 'fade' | 'slide'
     */
    readonly setHidden: ((hidden: boolean, withAnimation?: string | null | undefined) => void);
}
declare const _default: Spec;
export default _default;
