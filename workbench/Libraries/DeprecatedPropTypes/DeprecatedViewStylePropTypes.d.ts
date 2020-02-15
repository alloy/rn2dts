import ReactPropTypes from 'prop-types';
import { React$PropType$Primitive } from "flow-builtin-types";
/**
 * Warning: Some of these properties may not be supported in all releases.
 */
declare const DeprecatedViewStylePropTypes: {
    backfaceVisibility: React$PropType$Primitive<VisibilityState>;
    backgroundColor: any;
    borderColor: any;
    borderTopColor: any;
    borderRightColor: any;
    borderBottomColor: any;
    borderLeftColor: any;
    borderStartColor: any;
    borderEndColor: any;
    borderRadius: ReactPropTypes.Requireable<number>;
    borderTopLeftRadius: ReactPropTypes.Requireable<number>;
    borderTopRightRadius: ReactPropTypes.Requireable<number>;
    borderTopStartRadius: ReactPropTypes.Requireable<number>;
    borderTopEndRadius: ReactPropTypes.Requireable<number>;
    borderBottomLeftRadius: ReactPropTypes.Requireable<number>;
    borderBottomRightRadius: ReactPropTypes.Requireable<number>;
    borderBottomStartRadius: ReactPropTypes.Requireable<number>;
    borderBottomEndRadius: ReactPropTypes.Requireable<number>;
    borderStyle: React$PropType$Primitive<"solid" | "dotted" | "dashed">;
    borderWidth: ReactPropTypes.Requireable<number>;
    borderTopWidth: ReactPropTypes.Requireable<number>;
    borderRightWidth: ReactPropTypes.Requireable<number>;
    borderBottomWidth: ReactPropTypes.Requireable<number>;
    borderLeftWidth: ReactPropTypes.Requireable<number>;
    opacity: ReactPropTypes.Requireable<number>;
    /**
     * (Android-only) Sets the elevation of a view, using Android's underlying
     * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
     * This adds a drop shadow to the item and affects z-order for overlapping views.
     * Only supported on Android 5.0+, has no effect on earlier versions.
     * @platform android
     */
    elevation: ReactPropTypes.Requireable<number>;
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
    borderStartWidth: ReactPropTypes.Requireable<number>;
    borderEndWidth: ReactPropTypes.Requireable<number>;
    position: React$PropType$Primitive<"absolute" | "relative">;
    flexDirection: React$PropType$Primitive<"row" | "row-reverse" | "column" | "column-reverse">;
    flexWrap: React$PropType$Primitive<"wrap" | "nowrap" | "wrap-reverse">;
    justifyContent: React$PropType$Primitive<"center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly">;
    alignItems: React$PropType$Primitive<"center" | "flex-start" | "flex-end" | "stretch" | "baseline">;
    alignSelf: React$PropType$Primitive<"auto" | "center" | "flex-start" | "flex-end" | "stretch" | "baseline">;
    alignContent: React$PropType$Primitive<"center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch">;
    overflow: React$PropType$Primitive<"hidden" | "visible" | "scroll">;
    flex: ReactPropTypes.Requireable<number>;
    flexGrow: ReactPropTypes.Requireable<number>;
    flexShrink: ReactPropTypes.Requireable<number>;
    flexBasis: React$PropType$Primitive<string | number>;
    aspectRatio: ReactPropTypes.Requireable<number>;
    zIndex: ReactPropTypes.Requireable<number>;
    direction: React$PropType$Primitive<CanvasDirection>;
};
export default DeprecatedViewStylePropTypes;
