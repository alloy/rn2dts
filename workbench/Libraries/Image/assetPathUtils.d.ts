import { $TEMPORARY$string } from "flow-builtin-types";
import { PackagerAsset } from "./AssetRegistry";
/**
 * FIXME: using number to represent discrete scale numbers is fragile in essence because of
 * floating point numbers imprecision.
 */
declare function getAndroidAssetSuffix(scale: number): string;
declare function getAndroidResourceFolderName(asset: PackagerAsset, scale: number): string | $TEMPORARY$string<"raw">;
declare function getAndroidResourceIdentifier(asset: PackagerAsset): string;
declare function getBasePath(asset: PackagerAsset): string;
declare const _default: {
    getAndroidAssetSuffix: typeof getAndroidAssetSuffix;
    getAndroidResourceFolderName: typeof getAndroidResourceFolderName;
    getAndroidResourceIdentifier: typeof getAndroidResourceIdentifier;
    getBasePath: typeof getBasePath;
};
export default _default;
