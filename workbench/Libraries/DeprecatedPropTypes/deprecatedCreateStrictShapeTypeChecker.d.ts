import { ReactPropsCheckType, ReactPropsChainableTypeChecker } from "flow-builtin-types";
declare function deprecatedCreateStrictShapeTypeChecker(shapeTypes: {
    [key: string]: ReactPropsCheckType;
}): ReactPropsChainableTypeChecker;
export default deprecatedCreateStrictShapeTypeChecker;
