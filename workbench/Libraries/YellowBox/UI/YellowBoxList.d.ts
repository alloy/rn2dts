import React from 'react';
import { UniqueBranding } from "flow-builtin-types";
import { Category } from "../Data/YellowBoxCategory";
import { Registry } from "../Data/YellowBoxRegistry";
declare type Props = UniqueBranding & Readonly<{
    onDismiss: ((category: Category) => void);
    onDismissAll: (() => void);
    registry: Registry;
}>;
declare class YellowBoxList extends React.Component<Props> {
}
export default YellowBoxList;
