import { UniqueBranding } from "flow-builtin-types";
import { BlurEvent } from "../../Types/CoreEventTypes";
import { FocusEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";

type TVTouchableConfig = UniqueBranding & Readonly<{
  getDisabled: (() => boolean);
  onBlur: ((event: BlurEvent) => unknown);
  onFocus: ((event: FocusEvent) => unknown);
  onPress: ((event: PressEvent) => unknown);
}>;

declare class TVTouchable {
  constructor(component: any, config: TVTouchableConfig): void;
  destroy(): void;
}
export { TVTouchable as default };