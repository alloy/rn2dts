import { UniqueBranding } from "flow-builtin-types";
const DeprecatedImagePropType = require("../DeprecatedPropTypes/DeprecatedImagePropType");
const React = require("react");

const resolveAssetSource = require("./resolveAssetSource");

import { ImageProps as ImagePropsType } from "./ImageProps";

import ImageViewNativeComponent from "./ImageViewNativeComponent";

declare function getSize(uri: string, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): void;

declare function getSizeWithHeaders(uri: string, headers: {
  [key: string]: string;
}, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): any;

declare function prefetch(url: string): any;

declare function queryCache(urls: Array<string>): Promise<{
  [key: string]: "memory" | "disk" | "disk/memory";
}>;

type ImageComponentStatics = UniqueBranding & Readonly<{
  getSize: typeof getSize;
  getSizeWithHeaders: typeof getSizeWithHeaders;
  prefetch: typeof prefetch;
  queryCache: typeof queryCache;
  resolveAssetSource: typeof resolveAssetSource;
  propTypes: typeof DeprecatedImagePropType;
}>;

declare module.exports: React.AbstractComponent<ImagePropsType, React.ElementRef<typeof ImageViewNativeComponent>> & ImageComponentStatics