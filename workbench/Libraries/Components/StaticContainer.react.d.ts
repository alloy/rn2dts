import React from 'react';
import { React$Node } from "flow-builtin-types";
import { $ReadOnly } from "utility-types";
/**
 * Renders static content efficiently by allowing React to short-circuit the
 * reconciliation process. This component should be used when you know that a
 * subtree of components will never need to be updated.
 *
 *   const someValue = ...; // We know for certain this value will never change.
 *   return (
 *     <StaticContainer>
 *       <MyComponent value={someValue} />
 *     </StaticContainer>
 *   );
 *
 * Typically, you will not need to use this component and should opt for normal
 * React reconciliation.
 */
declare type Props = $ReadOnly<{
    /**
     * Whether or not this component should update.
     */
    shouldUpdate: boolean | null | undefined;
    /**
     * Content short-circuited by React reconciliation process.
     */
    children: React.ReactNode;
}>;
declare class StaticContainer extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Props): boolean;
    render(): null | React$Node;
}
export default StaticContainer;
