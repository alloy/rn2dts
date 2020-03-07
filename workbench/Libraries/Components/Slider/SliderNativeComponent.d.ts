import { UniqueBranding } from "flow-builtin-types";
import { BubblingEventHandler } from "../../Types/CodegenTypes";
import { DirectEventHandler } from "../../Types/CodegenTypes";
import { Double } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ViewProps } from "../View/ViewPropTypes";

type Event = UniqueBranding & Readonly<{value: Double;fromUser?: boolean;}>;

type NativeProps = UniqueBranding & Readonly<ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  maximumTrackImage?: ImageSource | null | undefined;
  maximumTrackTintColor?: ColorValue | null | undefined;
  maximumValue?: WithDefault<Double, 1>;
  minimumTrackImage?: ImageSource | null | undefined;
  minimumTrackTintColor?: ColorValue | null | undefined;
  minimumValue?: WithDefault<Double, 0>;
  step?: WithDefault<Double, 0>;
  testID?: WithDefault<string, "">;
  thumbImage?: ImageSource | null | undefined;
  thumbTintColor?: ColorValue | null | undefined;
  trackImage?: ImageSource | null | undefined;
  value?: WithDefault<Double, 0>;
  // Events
  onChange?: BubblingEventHandler<Event> | null | undefined;
  onValueChange?: BubblingEventHandler<Event, "paperValueChange"> | null | undefined;
  onSlidingComplete?: DirectEventHandler<Event, "paperSlidingComplete"> | null | undefined;
}>;

export default HostComponent<NativeProps>;