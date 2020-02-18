export declare type EventSender = ((name: string, params: any) => void);
declare class InspectorAgent {
    constructor(eventSender: EventSender);
    sendEvent(name: string, params: any): void;
}
export default InspectorAgent;
