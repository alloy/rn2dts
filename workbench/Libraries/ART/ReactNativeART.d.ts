import React from 'react';
import PropTypes from 'prop-types';
declare class Surface extends React.Component {
    static childContextTypes: {
        isInSurface: PropTypes.Requireable<boolean>;
    };
    getChildContext(): {
        isInSurface: boolean;
    };
    render(): JSX.Element;
}
declare class Group extends React.Component {
    static contextTypes: {
        isInSurface: PropTypes.Validator<boolean>;
    };
    render(): JSX.Element;
}
declare class ClippingRectangle extends React.Component {
    render(): JSX.Element;
}
export declare type ShapeProps = {
    fill?: unknown;
    stroke?: unknown;
    strokeCap?: unknown;
    strokeDash?: unknown;
    strokeJoin?: unknown;
    strokeWidth?: unknown;
    x?: number;
    y?: number;
    opacity?: unknown;
};
declare class Shape extends React.Component<ShapeProps> {
    render(): JSX.Element;
}
declare class Text extends React.Component {
    render(): JSX.Element;
}
declare function LinearGradient(stops: any, x1: any, y1: any, x2: any, y2: any): void;
declare function RadialGradient(stops: any, fx: any, fy: any, rx: any, ry: any, cx: any, cy: any): void;
declare function Pattern(url: any, width: any, height: any, left: any, top: any): void;
declare const ReactART: {
    LinearGradient: typeof LinearGradient;
    RadialGradient: typeof RadialGradient;
    Pattern: typeof Pattern;
    Transform: any;
    Path: any;
    Surface: typeof Surface;
    Group: typeof Group;
    ClippingRectangle: typeof ClippingRectangle;
    Shape: typeof Shape;
    Text: typeof Text;
};
export default ReactART;
