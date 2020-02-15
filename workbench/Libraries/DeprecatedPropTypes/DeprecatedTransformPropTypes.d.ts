import { React$PropType$Primitive, ReactPropsCheckType } from "flow-builtin-types";
declare const DeprecatedTransformPropTypes: {
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
    scaleX: ReactPropsCheckType;
    scaleY: ReactPropsCheckType;
    rotation: ReactPropsCheckType;
    translateX: ReactPropsCheckType;
    translateY: ReactPropsCheckType;
};
export default DeprecatedTransformPropTypes;
