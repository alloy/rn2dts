import { UniqueBranding, Stringish } from "flow-builtin-types";
import { $Diff } from "utility-types";
import { SyntheticEvent } from "../Types/CoreEventTypes";
import { LayoutEvent } from "../Types/CoreEventTypes";
import { EdgeInsetsProp } from "../StyleSheet/EdgeInsetsPropType";
import { ImageSource } from "./ImageSource";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import { DimensionValue } from "../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../Components/View/ViewPropTypes";

type ImageLoadEvent = React.SyntheticEvent<UniqueBranding & Readonly<{
  source: UniqueBranding & Readonly<{width: number;height: number;url: string;}>;
  uri?: string;
}>>;

type IOSImageProps = UniqueBranding & Readonly<{

  /**
     * A static image to display while loading the image source.
     *
     * See https://reactnative.dev/docs/image.html#defaultsource
     */
  defaultSource?: ImageSource | null | undefined;

  /**
     * Invoked when a partial load of the image is complete.
     *
     * See https://reactnative.dev/docs/image.html#onpartialload
     */
  onPartialLoad?: (() => void) | null | undefined;

  /**
     * Invoked on download progress with `{nativeEvent: {loaded, total}}`.
     *
     * See https://reactnative.dev/docs/image.html#onprogress
     */
  onProgress?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{loaded: number;total: number;}>>) => void) | null | undefined;
}>;

type AndroidImageProps = UniqueBranding & Readonly<{
  loadingIndicatorSource?: (number | (UniqueBranding & Readonly<{uri: string;}>)) | null | undefined;
  progressiveRenderingEnabled?: boolean | null | undefined;
  fadeDuration?: number | null | undefined;
}>;

type ImageProps = $Diff<ViewProps, UniqueBranding & Readonly<{style: ViewStyleProp | null | undefined;}>> & IOSImageProps & AndroidImageProps & {
  /**
     * When true, indicates the image is an accessibility element.
     *
     * See https://reactnative.dev/docs/image.html#accessible
     */
  accessible?: boolean | null | undefined;

  /**
     * The text that's read by the screen reader when the user interacts with
     * the image.
     *
     * See https://reactnative.dev/docs/image.html#accessibilitylabel
     */
  accessibilityLabel?: Stringish | null | undefined;

  /**
     * blurRadius: the blur radius of the blur filter added to the image
     *
     * See https://reactnative.dev/docs/image.html#blurradius
     */
  blurRadius?: number | null | undefined;

  /**
     * See https://reactnative.dev/docs/image.html#capinsets
     */
  capInsets?: EdgeInsetsProp | null | undefined;

  /**
     * Invoked on load error with `{nativeEvent: {error}}`.
     *
     * See https://reactnative.dev/docs/image.html#onerror
     */
  onError?: ((event: React.SyntheticEvent<UniqueBranding & Readonly<{error: string;}>>) => void) | null | undefined;

  /**
     * Invoked on mount and layout changes with
     * `{nativeEvent: {layout: {x, y, width, height}}}`.
     *
     * See https://reactnative.dev/docs/image.html#onlayout
     */
  onLayout?: ((event: LayoutEvent) => unknown) | null | undefined;

  /**
     * Invoked when load completes successfully.
     *
     * See https://reactnative.dev/docs/image.html#onload
     */
  onLoad?: ((event: ImageLoadEvent) => void) | null | undefined;

  /**
     * Invoked when load either succeeds or fails.
     *
     * See https://reactnative.dev/docs/image.html#onloadend
     */
  onLoadEnd?: (() => void) | null | undefined;

  /**
     * Invoked on load start.
     *
     * See https://reactnative.dev/docs/image.html#onloadstart
     */
  onLoadStart?: (() => void) | null | undefined;

  /**
     * See https://reactnative.dev/docs/image.html#resizemethod
     */
  resizeMethod?: ("auto" | "resize" | "scale") | null | undefined;

  /**
     * The image source (either a remote URL or a local file resource).
     *
     * See https://reactnative.dev/docs/image.html#source
     */
  source?: ImageSource | null | undefined;

  /**
     * See https://reactnative.dev/docs/image.html#style
     */
  style?: ImageStyleProp | null | undefined;
  // Can be set via props or style, for now
  height?: DimensionValue | null | undefined;
  width?: DimensionValue | null | undefined;

  /**
     * Determines how to resize the image when the frame doesn't match the raw
     * image dimensions.
     *
     * See https://reactnative.dev/docs/image.html#resizemode
     */
  resizeMode?: ("cover" | "contain" | "stretch" | "repeat" | "center") | null | undefined;

  /**
     * A unique identifier for this element to be used in UI Automation
     * testing scripts.
     *
     * See https://reactnative.dev/docs/image.html#testid
     */
  testID?: string | null | undefined;
  src?: never;
  children?: never;
};
export { ImageLoadEvent };

export { ImageProps };