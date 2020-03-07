import { SyntheticEvent } from "./CoreEventTypes";

type BubblingEventHandler<T, PaperName extends string | never = never> = ((event: React.SyntheticEvent<T>) => void | Promise<void>);
type DirectEventHandler<T, PaperName extends string | never = never> = ((event: React.SyntheticEvent<T>) => void | Promise<void>);

type Double = number;
type Float = number;
type Int32 = number;

type DefaultTypes = number | boolean | string | ReadonlyArray<string>;

type WithDefault<Type extends DefaultTypes, Value extends (Type | null | undefined) | string> = Type | null | undefined;
export { BubblingEventHandler };
export { DirectEventHandler };

export { Double };
export { Float };
export { Int32 };

export { WithDefault };