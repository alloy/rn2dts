import { HMRClientNativeInterface } from "./HMRClient";

declare var HMRClientProdShim: HMRClientNativeInterface;

declare module.exports: typeof HMRClientProdShim