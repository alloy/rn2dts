type FillRateInfo = Info;

declare class Info {
  any_blank_count: number;
  any_blank_ms: number;
  any_blank_speed_sum: number;
  mostly_blank_count: number;
  mostly_blank_ms: number;
  pixels_blank: number;
  pixels_sampled: number;
  pixels_scrolled: number;
  total_time_spent: number;
  sample_count: number;
}

type FrameMetrics = {inLayout?: boolean;length: number;offset: number;};

declare class FillRateHelper {
  addListener(callback: ((arg0: FillRateInfo) => void)): {
    remove: (() => void);

  };
  setSampleRate(sampleRate: number): void;
  setMinSampleCount(minSampleCount: number): void;
  constructor(getFrameMetrics: ((index: number) => FrameMetrics | null | undefined)): void;
  activate(): void;
  deactivateAndFlush(): void;
  computeBlankness(props: {
    data: any;
    getItemCount: ((data: any) => number);
    initialNumToRender: number;

  }, state: {first: number;last: number;}, scrollMetrics: {
    dOffset: number;
    offset: number;
    velocity: number;
    visibleLength: number;

  }): number;
  enabled(): boolean;
}
export { FillRateInfo };

declare module.exports: typeof FillRateHelper