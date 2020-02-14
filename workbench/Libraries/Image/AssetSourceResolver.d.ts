export declare type ResolvedAssetSource = {
    readonly __packager_asset: boolean;
    readonly width: number | null | undefined;
    readonly height: number | null | undefined;
    readonly uri: string;
    readonly scale: number;
};
import { PackagerAsset } from "./AssetRegistry";
declare class AssetSourceResolver {
    serverUrl: string | null | undefined;
    jsbundleUrl: string | null | undefined;
    asset: PackagerAsset;
    constructor(serverUrl: string | null | undefined, jsbundleUrl: string | null | undefined, asset: PackagerAsset);
    isLoadedFromServer(): boolean;
    isLoadedFromFileSystem(): boolean;
    defaultAsset(): ResolvedAssetSource;
    /**
     * Returns an absolute URL which can be used to fetch the asset
     * from the devserver
     */
    assetServerURL(): ResolvedAssetSource;
    /**
     * Resolves to just the scaled asset filename
     * E.g. 'assets/AwesomeModule/icon@2x.png'
     */
    scaledAssetPath(): ResolvedAssetSource;
    /**
     * Resolves to where the bundle is running from, with a scaled asset filename
     * E.g. 'file:///sdcard/bundle/assets/AwesomeModule/icon@2x.png'
     */
    scaledAssetURLNearBundle(): ResolvedAssetSource;
    /**
     * The default location of assets bundled with the app, located by
     * resource identifier
     * The Android resource system picks the correct scale.
     * E.g. 'assets_awesomemodule_icon'
     */
    resourceIdentifierWithoutScale(): ResolvedAssetSource;
    /**
     * If the jsbundle is running from a sideload location, this resolves assets
     * relative to its location
     * E.g. 'file:///sdcard/AwesomeModule/drawable-mdpi/icon.png'
     */
    drawableFolderInBundle(): ResolvedAssetSource;
    fromSource(source: string): ResolvedAssetSource;
    static pickScale(scales: Array<number>, deviceScale: number): number;
}
export default AssetSourceResolver;
