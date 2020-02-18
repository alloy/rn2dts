import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
declare type Props = UniqueBranding & Readonly<{
    /**
     * Indicates whether the render function needs to be called again
     */
    shouldUpdate: boolean;
    /**
     * () => renderable
     * A function that returns a renderable component
     */
    render: (() => React.ReactNode);
}>;
declare class StaticRenderer extends React.Component<Props> {
}
export default StaticRenderer;
