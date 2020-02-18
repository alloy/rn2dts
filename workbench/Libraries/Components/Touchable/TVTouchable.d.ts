import { UniqueBranding } from "flow-builtin-types";
import { BlurEvent, FocusEvent, PressEvent } from "../../Types/CoreEventTypes";
declare type TVTouchableConfig = UniqueBranding & Readonly<{
    getDisabled: (() => boolean);
    onBlur: ((event: BlurEvent) => unknown);
    onFocus: ((event: FocusEvent) => unknown);
    onPress: ((event: PressEvent) => unknown);
}>;
export default class TVTouchable {
    constructor(component: any, config: TVTouchableConfig);
    destroy(): void;
}
export {};
