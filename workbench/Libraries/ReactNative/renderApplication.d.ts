import React from 'react';
import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";
declare function renderApplication<Props extends any>(RootComponent: React.ComponentType<Props>, initialProps: Props, rootTag: any, WrapperComponent?: React.ComponentType<any> | null | undefined, fabric?: boolean, showFabricIndicator?: boolean, scopedPerformanceLogger?: IPerformanceLogger): void;
export default renderApplication;
