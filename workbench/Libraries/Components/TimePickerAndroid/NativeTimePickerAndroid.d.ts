import { TurboModule } from "../../TurboModule/RCTExport";
export declare type TimePickerOptions = {
    hour?: number;
    minute?: number;
    is24Hour?: boolean;
    mode?: string;
};
export declare type TimePickerResult = {
    action: string;
    hour: number;
    minute: number;
};
export interface Spec extends TurboModule {
    readonly open: ((options: TimePickerOptions) => Promise<TimePickerResult>);
}
declare const _default: Spec | null | undefined;
export default _default;
