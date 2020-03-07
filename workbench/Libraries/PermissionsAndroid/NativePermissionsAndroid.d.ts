import { TurboModule } from "../TurboModule/RCTExport";

type PermissionStatus = string;
type PermissionType = string;

interface Spec extends TurboModule {
  readonly checkPermission: ((permission: PermissionType) => Promise<boolean>);
  readonly requestPermission: ((permission: PermissionType) => Promise<PermissionStatus>);
  readonly shouldShowRequestPermissionRationale: ((permission: string) => Promise<boolean>);
  readonly requestMultiplePermissions: ((permissions: Array<PermissionType>) => Promise<{
    [permission: PermissionType]: PermissionStatus;
  }>);
}
export { PermissionStatus };
export { PermissionType };

export { Spec };

export default Spec | null | undefined;