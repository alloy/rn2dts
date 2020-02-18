import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
declare type Props = UniqueBranding & Readonly<{
    children?: React.ReactNode;
    fabric?: boolean;
    rootTag: number;
    showArchitectureIndicator?: boolean;
    WrapperComponent?: React.ComponentType<any> | null | undefined;
    internal_excludeLogBox?: boolean | null | undefined;
}>;
declare class AppContainer extends React.Component<Props> {
}
export default AppContainer;
