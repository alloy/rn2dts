import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { PressEvent } from "../../Types/CoreEventTypes";
import { StackFrame } from "../../Core/NativeExceptionsManager";

type Props = UniqueBranding & Readonly<{frame: StackFrame;onPress?: ((event: PressEvent) => void) | null | undefined;}>;

declare function LogBoxInspectorStackFrame(props: Props): React.ReactNode;

export default typeof LogBoxInspectorStackFrame;