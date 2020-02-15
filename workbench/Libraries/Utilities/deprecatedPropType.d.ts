import { ReactPropsCheckType } from "flow-builtin-types";
/**
 * Adds a deprecation warning when the prop is used.
 */
declare function deprecatedPropType(propType: ReactPropsCheckType, explanation: string): ReactPropsCheckType;
export default deprecatedPropType;
