type Handler = {
  onIterate?: (() => void);
  onStall: ((params: {lastInterval: number;busyTime: number;}) => string | null | undefined);

};

declare var JSEventLoopWatchdog: {
  getStats: (() => any);
  reset: (() => void);
  addHandler: ((handler: Handler) => void);
  install: ((arg0: {thresholdMS: number;}) => void);
};

declare module.exports: typeof JSEventLoopWatchdog