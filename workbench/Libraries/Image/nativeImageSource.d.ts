import { UniqueBranding } from "flow-builtin-types";
import { ImageURISource } from "./ImageSource";

type NativeImageSourceSpec = UniqueBranding & Readonly<{
  android?: string;
  ios?: string;
  default?: string;
  // For more details on width and height, see
  // https://reactnative.dev/docs/images.html#why-not-automatically-size-everything
  height: number;
  width: number;
}>;

declare function nativeImageSource(spec: NativeImageSourceSpec): ImageURISource;

declare module.exports: typeof nativeImageSource