declare var InteractionStallDebugger: {
  install(options: {thresholdMS: number;}): void;
};

declare module.exports: typeof InteractionStallDebugger