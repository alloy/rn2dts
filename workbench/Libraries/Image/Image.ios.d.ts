import DeprecatedImagePropType from '../DeprecatedPropTypes/DeprecatedImagePropType';
import ReactNative from '../Renderer/shims/ReactNative';
import resolveAssetSource from './resolveAssetSource';
import { Class } from "utility-types";
import { ImageProps as ImagePropsType } from "./ImageProps";
declare function getSize(uri: string, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): void;
declare function getSizeWithHeaders(uri: string, headers: {
    [key: string]: string;
}, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): any;
declare function prefetch(url: string): any;
declare function queryCache(urls: Array<string>): Promise<{
    [key: string]: "memory" | "disk" | "disk/memory";
}>;
declare class ImageComponentType extends ReactNative.NativeComponent<ImagePropsType> {
    getSize: typeof getSize;
    getSizeWithHeaders: typeof getSizeWithHeaders;
    prefetch: typeof prefetch;
    queryCache: typeof queryCache;
    resolveAssetSource: typeof resolveAssetSource;
    propTypes: typeof DeprecatedImagePropType;
}
declare const _default: Class<ImageComponentType>;
export default _default;
