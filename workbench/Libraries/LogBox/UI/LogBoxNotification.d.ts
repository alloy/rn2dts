import { UniqueBranding } from "flow-builtin-types";
import * as React from "react";

import LogBoxLog from "../Data/LogBoxLog";

type Props = UniqueBranding & Readonly<{
  log: LogBoxLog;
  totalLogCount: number;
  level: "warn" | "error";
  onPressOpen: (() => void);
  onPressDismiss: (() => void);
}>;

declare function LogBoxLogNotification(props: Props): React.ReactNode;

export default typeof LogBoxLogNotification;