type Content = {title?: string;message: string;} | {title?: string;url: string;};
type Options = {
  dialogTitle?: string;
  excludedActivityTypes?: Array<string>;
  tintColor?: string;
  subject?: string;

};

declare class Share {
  share(content: Content, options?: Options): Promise<any>;
  sharedAction: "sharedAction";
  dismissedAction: "dismissedAction";
}

declare module.exports: typeof Share