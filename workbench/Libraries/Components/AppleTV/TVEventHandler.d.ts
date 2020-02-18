declare class TVEventHandler {
    enable(component: any | null | undefined, callback: ((...args: any) => any)): void;
    disable(): void;
}
export default TVEventHandler;
