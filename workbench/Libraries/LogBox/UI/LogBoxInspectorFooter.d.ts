import { UniqueBranding } from "flow-builtin-types";
import { LogLevel } from "../Data/LogBoxLog";

import * as React from "react";

type Props = UniqueBranding & Readonly<{onDismiss: (() => void);onMinimize: (() => void);level?: LogLevel | null | undefined;}>;

declare function LogBoxInspectorFooter(props: Props): React.ReactNode;

export default typeof LogBoxInspectorFooter;