import * as React from "react";

import { IPerformanceLogger } from "./createPerformanceLogger";

declare var PerformanceLoggerContext: React.Context<IPerformanceLogger>;
declare module.exports: typeof PerformanceLoggerContext