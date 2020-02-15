import React from 'react';
import { React$PropType$Primitive, $TEMPORARY$object } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { LayoutEvent } from "../Types/CoreEventTypes";
import { Context } from "./Incremental";
/**
 * WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will
 * not be reliably announced.  The whole thing might be deleted, who knows? Use
 * at your own risk.
 *
 * `<IncrementalPresenter>` can be used to group sets of `<Incremental>` renders
 * such that they are initially invisible and removed from layout until all
 * descendants have finished rendering, at which point they are drawn all at once
 * so the UI doesn't jump around during the incremental rendering process.
 *
 * See Incremental.js for more info.
 */
declare type Props = $ReadOnly<{
    name: string;
    disabled?: boolean;
    onDone?: (() => unknown);
    onLayout?: ((event: LayoutEvent) => unknown);
    style?: ViewStyleProp;
    children?: React.ReactNode;
}>;
declare class IncrementalPresenter extends React.Component<Props> {
    context: Context;
    _isDone: boolean;
    static contextTypes: any | $TEMPORARY$object<{
        incrementalGroup: React$PropType$Primitive<any>;
        incrementalGroupEnabled: React$PropType$Primitive<boolean>;
    }>;
    constructor(props: Props, context: Context);
    onDone(): void;
    render(): React.ReactNode;
}
export default IncrementalPresenter;
