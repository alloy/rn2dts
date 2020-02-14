import ReactNative from '../Renderer/shims/ReactNative';
import resolveAssetSource from './resolveAssetSource';
import { Class } from "utility-types";
import { ImageProps as ImagePropsType } from "./ImageProps";
declare const ImageProps: any;
/**
 * Retrieve the width and height (in pixels) of an image prior to displaying it
 *
 * See https://facebook.github.io/react-native/docs/image.html#getsize
 */
declare function getSize(url: string, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): any;
/**
 * Retrieve the width and height (in pixels) of an image prior to displaying it
 * with the ability to provide the headers for the request
 *
 * See https://facebook.github.io/react-native/docs/image.html#getsizewithheaders
 */
declare function getSizeWithHeaders(url: string, headers: {
    [key: string]: string;
}, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): any;
declare function prefetch(url: string, callback: ((...args: any) => any) | null | undefined): any;
declare function abortPrefetch(requestId: number): void;
/**
 * Perform cache interrogation.
 *
 * See https://facebook.github.io/react-native/docs/image.html#querycache
 */
declare function queryCache(urls: Array<string>): Promise<{
    [key: string]: "memory" | "disk" | "disk/memory";
}>;
declare class ImageComponentType extends ReactNative.NativeComponent<ImagePropsType> {
    getSize: typeof getSize;
    getSizeWithHeaders: typeof getSizeWithHeaders;
    prefetch: typeof prefetch;
    abortPrefetch: typeof abortPrefetch;
    queryCache: typeof queryCache;
    resolveAssetSource: typeof resolveAssetSource;
    propTypes: typeof ImageProps;
}
declare const _default: Class<ImageComponentType>;
export default _default;
