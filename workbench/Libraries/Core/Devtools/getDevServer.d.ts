type DevServerInfo = {url: string;bundleLoadedFromServer: boolean;};

declare function getDevServer(): DevServerInfo;

declare module.exports: typeof getDevServer