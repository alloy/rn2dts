const createReactNativeComponentClass = require("../Renderer/shims/createReactNativeComponentClass");

declare module.exports: {
  createReactNativeComponentClass: typeof createReactNativeComponentClass;
}