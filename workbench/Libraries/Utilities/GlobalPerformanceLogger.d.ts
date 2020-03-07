import { IPerformanceLogger } from "./createPerformanceLogger";

declare var GlobalPerformanceLogger: IPerformanceLogger;

declare module.exports: typeof GlobalPerformanceLogger