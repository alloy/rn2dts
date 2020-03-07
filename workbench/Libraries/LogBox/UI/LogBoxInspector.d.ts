import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { LogLevel } from "../Data/LogBoxLog";
import LogBoxLog from "../Data/LogBoxLog";

type Props = UniqueBranding & Readonly<{
  onDismiss: (() => void);
  onChangeSelectedIndex: ((index: number) => void);
  onMinimize: (() => void);
  logs: ReadonlyArray<LogBoxLog>;
  selectedIndex: number;
  fatalType?: LogLevel | null | undefined;
}>;

declare function LogBoxInspector(props: Props): React.ReactNode;

export default typeof LogBoxInspector;