type HermesStackLocationNative = {readonly type: "NATIVE";};

type HermesStackLocationSource = {
  readonly type: "SOURCE";
  readonly sourceUrl: string;
  readonly line1Based: number;
  readonly column1Based: number;
};

type HermesStackLocationBytecode = {
  readonly type: "BYTECODE";
  readonly sourceUrl: string;
  readonly line1Based: number;
  readonly virtualOffset0Based: number;
};

type HermesStackLocation = HermesStackLocationNative | HermesStackLocationSource | HermesStackLocationBytecode;

type HermesStackEntryFrame = {
  readonly type: "FRAME";
  readonly location: HermesStackLocation;
  readonly functionName: string;
};

type HermesStackEntrySkipped = {readonly type: "SKIPPED";readonly count: number;};

type HermesStackEntry = HermesStackEntryFrame | HermesStackEntrySkipped;

type HermesParsedStack = {
  readonly message: string;
  readonly entries: ReadonlyArray<HermesStackEntry>;
};
export { HermesParsedStack };

declare module.exports: ((stack: string) => HermesParsedStack)