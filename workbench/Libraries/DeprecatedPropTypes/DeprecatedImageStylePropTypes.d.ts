import ReactPropTypes from 'prop-types';
import { React$PropType$Primitive } from "flow-builtin-types";
declare const ImageStylePropTypes: {
    resizeMode: React$PropType$Primitive<"repeat" | "center" | "stretch" | "contain" | "cover">;
    backfaceVisibility: React$PropType$Primitive<VisibilityState>;
    backgroundColor: any;
    borderColor: any;
    borderWidth: ReactPropTypes.Requireable<number>;
    borderRadius: ReactPropTypes.Requireable<number>;
    overflow: React$PropType$Primitive<VisibilityState>;
    /**
     * Changes the color of all the non-transparent pixels to the tintColor.
     */
    tintColor: any;
    opacity: ReactPropTypes.Requireable<number>;
    /**
     * When the image has rounded corners, specifying an overlayColor will
     * cause the remaining space in the corners to be filled with a solid color.
     * This is useful in cases which are not supported by the Android
     * implementation of rounded corners:
     *   - Certain resize modes, such as 'contain'
     *   - Animated GIFs
     *
     * A typical way to use this prop is with images displayed on a solid
     * background and setting the `overlayColor` to the same color
     * as the background.
     *
     * For details of how this works under the hood, see
     * http://frescolib.org/docs/rounded-corners-and-circles.html
     *
     * @platform android
     */
    overlayColor: ReactPropTypes.Requireable<string>;
    borderTopLeftRadius: ReactPropTypes.Requireable<number>;
    borderTopRightRadius: ReactPropTypes.Requireable<number>;
    borderBottomLeftRadius: ReactPropTypes.Requireable<number>;
    borderBottomRightRadius: ReactPropTypes.Requireable<number>;
    transform: React$PropType$Primitive<({
        perspective?: number | undefined;
    } | {
        rotate?: string | undefined;
    } | {
        rotateX?: string | undefined;
    } | {
        rotateY?: string | undefined;
    } | {
        rotateZ?: string | undefined;
    } | {
        scale?: number | undefined;
    } | {
        scaleX?: number | undefined;
    } | {
        scaleY?: number | undefined;
    } | {
        translateX?: number | undefined;
    } | {
        translateY?: number | undefined;
    } | {
        skewX?: string | undefined;
    } | {
        skewY?: string | undefined;
    })[]>;
    transformMatrix: (props: any, propName: string, componentName: string) => Error | null | undefined;
    decomposedMatrix: (props: any, propName: string, componentName: string) => Error | null | undefined;
    scaleX: any;
    scaleY: any;
    rotation: any;
    translateX: any;
    translateY: any;
    shadowColor: any;
    shadowOffset: React$PropType$Primitive<{
        height?: number | undefined;
        width?: number | undefined;
    }>;
    shadowOpacity: ReactPropTypes.Requireable<number>;
    shadowRadius: ReactPropTypes.Requireable<number>;
    display: React$PropType$Primitive<"none" | "flex">;
    width: React$PropType$Primitive<string | number>;
    height: React$PropType$Primitive<string | number>;
    start: React$PropType$Primitive<string | number>;
    end: React$PropType$Primitive<string | number>;
    top: React$PropType$Primitive<string | number>;
    left: React$PropType$Primitive<string | number>;
    right: React$PropType$Primitive<string | number>;
    bottom: React$PropType$Primitive<string | number>;
    minWidth: React$PropType$Primitive<string | number>;
    maxWidth: React$PropType$Primitive<string | number>;
    minHeight: React$PropType$Primitive<string | number>;
    maxHeight: React$PropType$Primitive<string | number>;
    margin: React$PropType$Primitive<string | number>;
    marginVertical: React$PropType$Primitive<string | number>;
    marginHorizontal: React$PropType$Primitive<string | number>;
    marginTop: React$PropType$Primitive<string | number>;
    marginBottom: React$PropType$Primitive<string | number>;
    marginLeft: React$PropType$Primitive<string | number>;
    marginRight: React$PropType$Primitive<string | number>;
    marginStart: React$PropType$Primitive<string | number>;
    marginEnd: React$PropType$Primitive<string | number>;
    padding: React$PropType$Primitive<string | number>;
    paddingVertical: React$PropType$Primitive<string | number>;
    paddingHorizontal: React$PropType$Primitive<string | number>;
    paddingTop: React$PropType$Primitive<string | number>;
    paddingBottom: React$PropType$Primitive<string | number>;
    paddingLeft: React$PropType$Primitive<string | number>;
    paddingRight: React$PropType$Primitive<string | number>;
    paddingStart: React$PropType$Primitive<string | number>;
    paddingEnd: React$PropType$Primitive<string | number>;
    borderTopWidth: ReactPropTypes.Requireable<number>;
    borderStartWidth: ReactPropTypes.Requireable<number>;
    borderEndWidth: ReactPropTypes.Requireable<number>;
    borderRightWidth: ReactPropTypes.Requireable<number>;
    borderBottomWidth: ReactPropTypes.Requireable<number>;
    borderLeftWidth: ReactPropTypes.Requireable<number>;
    position: React$PropType$Primitive<"absolute" | "relative">;
    flexDirection: React$PropType$Primitive<"column" | "column-reverse" | "row" | "row-reverse">;
    flexWrap: React$PropType$Primitive<"nowrap" | "wrap" | "wrap-reverse">;
    justifyContent: React$PropType$Primitive<"center" | "space-around" | "space-between" | "space-evenly" | "flex-end" | "flex-start">;
    alignItems: React$PropType$Primitive<"center" | "stretch" | "flex-end" | "flex-start" | "baseline">;
    alignSelf: React$PropType$Primitive<"auto" | "center" | "stretch" | "flex-end" | "flex-start" | "baseline">;
    alignContent: React$PropType$Primitive<"center" | "space-around" | "space-between" | "stretch" | "flex-end" | "flex-start">;
    flex: ReactPropTypes.Requireable<number>;
    flexGrow: ReactPropTypes.Requireable<number>;
    flexShrink: ReactPropTypes.Requireable<number>;
    flexBasis: React$PropType$Primitive<string | number>;
    aspectRatio: ReactPropTypes.Requireable<number>;
    zIndex: ReactPropTypes.Requireable<number>;
    direction: React$PropType$Primitive<CanvasDirection>;
};
export default ImageStylePropTypes;
