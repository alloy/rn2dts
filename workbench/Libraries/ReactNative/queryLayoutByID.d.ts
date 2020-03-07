type OnSuccessCallback = ((left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void);

type OnErrorCallback = ((error: any) => void);

declare var queryLayoutByID: ((tag: number | null | undefined, onError: OnErrorCallback, onSuccess: OnSuccessCallback) => void);

declare module.exports: typeof queryLayoutByID