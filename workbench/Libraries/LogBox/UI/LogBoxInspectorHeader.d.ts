import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import { LogLevel } from "../Data/LogBoxLog";
type Props = UniqueBranding & Readonly<{
  onSelectIndex: ((selectedIndex: number) => void);
  selectedIndex: number;
  total: number;
  level: LogLevel;
}>;

declare function LogBoxInspectorHeader(props: Props): React.ReactNode;

export default typeof LogBoxInspectorHeader;