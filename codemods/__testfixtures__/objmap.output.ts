
type ReturnBoolType = (<V>(arg0: V) => true);
type BoolifiedDeprecatedViewStylePropTypes = {
  [K in keyof typeof DeprecatedViewStylePropTypes]: ReturnType<ReturnBoolType>;
};
