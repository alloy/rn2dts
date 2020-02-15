import PropTypes from 'prop-types';
import { React$PropType$Primitive } from "flow-builtin-types";
declare const _default: {
    style: any;
    source: PropTypes.Requireable<number | PropTypes.InferProps<{
        uri: PropTypes.Requireable<string>;
        bundle: PropTypes.Requireable<string>;
        method: PropTypes.Requireable<string>;
        headers: PropTypes.Requireable<{
            [x: string]: string | null | undefined;
        }>;
        body: PropTypes.Requireable<string>;
        cache: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<number>;
        height: PropTypes.Requireable<number>;
        scale: PropTypes.Requireable<number>;
    }> | (PropTypes.InferProps<{
        uri: PropTypes.Requireable<string>;
        bundle: PropTypes.Requireable<string>;
        method: PropTypes.Requireable<string>;
        headers: PropTypes.Requireable<{
            [x: string]: string | null | undefined;
        }>;
        body: PropTypes.Requireable<string>;
        cache: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<number>;
        height: PropTypes.Requireable<number>;
        scale: PropTypes.Requireable<number>;
    }> | null | undefined)[]>;
    defaultSource: React$PropType$Primitive<number | {
        height?: number | undefined;
        scale?: number | undefined;
        uri?: string | undefined;
        width?: number | undefined;
    }>;
    accessible: PropTypes.Requireable<boolean>;
    accessibilityLabel: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    blurRadius: PropTypes.Requireable<number>;
    capInsets: React$PropType$Primitive<{
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }>;
    resizeMethod: React$PropType$Primitive<"auto" | "resize" | "scale">;
    resizeMode: React$PropType$Primitive<"repeat" | "center" | "stretch" | "contain" | "cover">;
    testID: PropTypes.Requireable<string>;
    onLayout: PropTypes.Requireable<(...args: any[]) => any>;
    onLoadStart: PropTypes.Requireable<(...args: any[]) => any>;
    onProgress: PropTypes.Requireable<(...args: any[]) => any>;
    onError: PropTypes.Requireable<(...args: any[]) => any>;
    onPartialLoad: PropTypes.Requireable<(...args: any[]) => any>;
    onLoad: PropTypes.Requireable<(...args: any[]) => any>;
    onLoadEnd: PropTypes.Requireable<(...args: any[]) => any>;
};
export default _default;
