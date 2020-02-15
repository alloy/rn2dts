import ReactPropTypes from 'prop-types';
import { React$PropType$Primitive } from "flow-builtin-types";
declare const DeprecatedTextStylePropTypes: {
    color: any;
    fontFamily: ReactPropTypes.Requireable<string>;
    fontSize: ReactPropTypes.Requireable<number>;
    fontStyle: React$PropType$Primitive<"normal" | "italic">;
    /**
     * Specifies font weight. The values 'normal' and 'bold' are supported for
     * most fonts. Not all fonts have a variant for each of the numeric values,
     * in that case the closest one is chosen.
     */
    fontWeight: React$PropType$Primitive<"bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900">;
    /**
     * @platform ios
     */
    fontVariant: React$PropType$Primitive<("small-caps" | "oldstyle-nums" | "lining-nums" | "tabular-nums" | "proportional-nums")[]>;
    textShadowOffset: React$PropType$Primitive<{
        height?: number | undefined;
        width?: number | undefined;
    }>;
    textShadowRadius: ReactPropTypes.Requireable<number>;
    textShadowColor: any;
    /**
     * @platform ios
     */
    letterSpacing: ReactPropTypes.Requireable<number>;
    lineHeight: ReactPropTypes.Requireable<number>;
    /**
     * Specifies text alignment. The value 'justify' is only supported on iOS and
     * fallbacks to `left` on Android.
     */
    textAlign: React$PropType$Primitive<"auto" | "left" | "right" | "center" | "justify">;
    /**
     * @platform android
     */
    textAlignVertical: React$PropType$Primitive<"auto" | "center" | "top" | "bottom">;
    /**
     * Set to `false` to remove extra font padding intended to make space for certain ascenders / descenders.
     * With some fonts, this padding can make text look slightly misaligned when centered vertically.
     * For best results also set `textAlignVertical` to `center`. Default is true.
     * @platform android
     */
    includeFontPadding: ReactPropTypes.Requireable<boolean>;
    textDecorationLine: React$PropType$Primitive<"none" | "underline" | "line-through" | "underline line-through">;
    /**
     * @platform ios
     */
    textDecorationStyle: React$PropType$Primitive<"solid" | "dotted" | "dashed" | "double">;
    /**
     * @platform ios
     */
    textDecorationColor: any;
    textTransform: React$PropType$Primitive<"none" | "capitalize" | "uppercase" | "lowercase">;
    /**
     * @platform ios
     */
    writingDirection: React$PropType$Primitive<NotificationDirection>;
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
    elevation: ReactPropTypes.Requireable<number>;
    transform: React$PropType$Primitive<({
        perspective?: number | undefined; /**
         * @platform ios
         */
    } | {
        rotate?: string | undefined;
    } | {
        rotateX?: string | undefined;
    } | {
        rotateY?: string | undefined;
    } | {
        rotateZ?: string | undefined;
    } | {
        scale?: number | undefined; /**
         * Specifies text alignment. The value 'justify' is only supported on iOS and
         * fallbacks to `left` on Android.
         */
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
    /**
     * @platform ios
     */
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
export default DeprecatedTextStylePropTypes;
