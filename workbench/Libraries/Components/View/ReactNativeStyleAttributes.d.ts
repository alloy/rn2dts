import processColor from '../../StyleSheet/processColor';
import processTransform from '../../StyleSheet/processTransform';
import sizesDiffer from '../../Utilities/differ/sizesDiffer';
import { $ReadOnly } from "utility-types";
declare type StyleAttributesType = {
    transform: $ReadOnly<{
        process: typeof processTransform;
    }> | true;
    shadowOffset: $ReadOnly<{
        diff: typeof sizesDiffer;
    }> | true;
    backgroundColor: typeof colorAttributes | true;
    borderBottomColor: typeof colorAttributes | true;
    borderColor: typeof colorAttributes | true;
    borderLeftColor: typeof colorAttributes | true;
    borderRightColor: typeof colorAttributes | true;
    borderTopColor: typeof colorAttributes | true;
    borderStartColor: typeof colorAttributes | true;
    borderEndColor: typeof colorAttributes | true;
    color: typeof colorAttributes | true;
    shadowColor: typeof colorAttributes | true;
    textDecorationColor: typeof colorAttributes | true;
    tintColor: typeof colorAttributes | true;
    textShadowColor: typeof colorAttributes | true;
    overlayColor: typeof colorAttributes | true;
};
declare const ReactNativeStyleAttributes: StyleAttributesType;
declare const colorAttributes: {
    process: typeof processColor;
};
export default ReactNativeStyleAttributes;
