declare var Settings: {
  _settings: any;
  get(key: string): unknown;
  set(settings: any): void;
  watchKeys(keys: string | Array<string>, callback: ((...args: any) => any)): number;
  clearWatch(watchId: number): void;
  _sendObservations(body: any): void;
};

declare module.exports: typeof Settings