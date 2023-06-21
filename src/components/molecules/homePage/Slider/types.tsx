import { RefObject } from "react";
import { KeenSliderInstance, KeenSliderOptions } from "keen-slider/react";

export type CarouselRef = RefObject<KeenSliderInstance | null>;
export type CarouselOptions = KeenSliderOptions;
export type CarouselInstance = KeenSliderInstance;
