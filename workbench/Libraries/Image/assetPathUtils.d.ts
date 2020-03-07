import { PackagerAsset } from "./AssetRegistry";

declare function getAndroidAssetSuffix(scale: number): string;

declare function getAndroidResourceFolderName(asset: PackagerAsset, scale: number): string;

declare function getAndroidResourceIdentifier(asset: PackagerAsset): string;

declare function getBasePath(asset: PackagerAsset): string;

declare module.exports: {
  getAndroidAssetSuffix: typeof getAndroidAssetSuffix;
  getAndroidResourceFolderName: typeof getAndroidResourceFolderName;
  getAndroidResourceIdentifier: typeof getAndroidResourceIdentifier;
  getBasePath: typeof getBasePath;
}