import React from 'react';
import { Props, Context } from "./Incremental";
/**
 * WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will
 * not be reliably announced.  The whole thing might be deleted, who knows? Use
 * at your own risk.
 *
 * `<Incremental>` components must be wrapped in an `<IncrementalGroup>` (e.g.
 * via `<IncrementalPresenter>`) in order to provide the incremental group
 * context, otherwise they will do nothing.
 *
 * See Incremental.js for more info.
 */
declare class IncrementalGroup extends React.Component<Props & {
    disabled?: boolean;
}> {
    context: Context;
    _groupInc: string;
    UNSAFE_componentWillMount(): void;
    getGroupId(): string;
    getChildContext(): Context;
    render(): React.ReactNode;
}
export default IncrementalGroup;
