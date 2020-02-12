declare const Settings: {
    get(key: string): unknown;
    set(settings: any): void;
    watchKeys(keys: any, callback: (...args: any) => any): number;
    clearWatch(watchId: number): void;
};
export default Settings;
