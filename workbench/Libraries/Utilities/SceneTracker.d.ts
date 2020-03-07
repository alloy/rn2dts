type Scene = {name: string;};

declare var SceneTracker: {
  setActiveScene(scene: Scene): void;
  getActiveScene(): Scene;
  addActiveSceneChangedListener(callback: ((scene: Scene) => void)): {
    remove: (() => void);

  };
};
export { Scene };

declare module.exports: typeof SceneTracker