import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useState, useMemo } from "react";
import { CarouselOptions, CarouselInstance } from "./types";

const carouselHooks = [
  (slider: CarouselInstance) => {
    let timeout: ReturnType<typeof setTimeout>;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        slider.next();
      }, 2000);
    }

    slider.on("created", nextTimeout);
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", (sliderInstance) => {
      sliderInstance.update();
      nextTimeout();
    });
    slider.on("updated", nextTimeout);
  },
];

export const useVerticalCarousel = () => {
  const [slideIdx, setSlideIdx] = useState(0);

  const defaultCarouselOptions: CarouselOptions = useMemo(
    () => ({
      initial: 1,
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      vertical: true,
      created(s) {
        setSlideIdx(1);
      },
      slideChanged({ track: { details } }) {
        setSlideIdx(details.rel);
      },
    }),
    []
  );

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    defaultCarouselOptions,
    carouselHooks
  );

  return {
    sliderRef,
    slideIdx,
  };
};
