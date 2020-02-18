import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";
declare type Props = UniqueBranding & Readonly<{
    heading: string;
    children: React.ReactNode;
    action?: React.ReactNode | null | undefined;
}>;
declare function LogBoxInspectorSection(props: Props): React.ReactNode;
export default LogBoxInspectorSection;
