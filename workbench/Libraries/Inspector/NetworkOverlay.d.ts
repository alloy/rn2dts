import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
declare type NetworkRequestInfo = {
    id: number;
    type?: string;
    url?: string;
    method?: string;
    status?: number;
    dataSent?: any;
    responseContentType?: string;
    responseSize?: number;
    requestHeaders?: any;
    responseHeaders?: string;
    response?: any | string;
    responseURL?: string;
    responseType?: string;
    timeout?: number;
    closeReason?: string;
    messages?: string;
    serverClose?: any;
    serverError?: any;
};
declare type Props = UniqueBranding & Readonly<{}>;
declare type State = {
    detailRowId: number | null | undefined;
    requests: Array<NetworkRequestInfo>;
};
/**
 * Show all the intercepted network requests over the InspectorPanel.
 */
declare class NetworkOverlay extends React.Component<Props, State> {
    state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default NetworkOverlay;
