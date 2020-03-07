type BackPressEventName = "backPress" | "hardwareBackPress";

type TBackHandler = {
  readonly exitApp: (() => void);
  readonly addEventListener: ((eventName: BackPressEventName, handler: ((...args: any) => any)) => {
    remove: (() => void);

  });
  readonly removeEventListener: ((eventName: BackPressEventName, handler: ((...args: any) => any)) => void);
};

declare var BackHandler: TBackHandler;

declare module.exports: typeof BackHandler