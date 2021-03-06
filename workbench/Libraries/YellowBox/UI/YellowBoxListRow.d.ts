import React from 'react';
import YellowBoxWarning from '../Data/YellowBoxWarning';
import { UniqueBranding } from "flow-builtin-types";
import { Category } from "../Data/YellowBoxCategory";
declare type Props = UniqueBranding & Readonly<{
    category: Category;
    warnings: ReadonlyArray<YellowBoxWarning>;
    onPress: ((category: Category) => void);
}>;
declare class YellowBoxListRow extends React.Component<Props> {
    static GUTTER: number;
    static HEIGHT: number;
}
export default YellowBoxListRow;
