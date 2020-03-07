import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";

const React = require("react");

declare function renderApplication<Props extends any>(RootComponent: React.ComponentType<Props>, initialProps: Props, rootTag: any, WrapperComponent?: React.ComponentType<any> | null | undefined, fabric?: boolean, showArchitectureIndicator?: boolean, scopedPerformanceLogger?: IPerformanceLogger, isLogBox?: boolean): void;

declare module.exports: typeof renderApplication