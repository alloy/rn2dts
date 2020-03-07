const AssetSourceResolver = require("./AssetSourceResolver");

import { ResolvedAssetSource } from "./AssetSourceResolver";

declare function setCustomSourceTransformer(transformer: ((resolver: AssetSourceResolver) => ResolvedAssetSource)): void;

declare function resolveAssetSource(source: any): ResolvedAssetSource | null | undefined;

declare module.exports: $TEMPORARY$module$exports$assign<typeof resolveAssetSource, {
  setCustomSourceTransformer: typeof setCustomSourceTransformer;
  pickScale: typeof AssetSourceResolver.pickScale;

}>