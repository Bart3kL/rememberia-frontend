import { useVerticalCarousel } from "./hooks";
import { cx } from "../../../../lib/utils";

import Slide from "../../../atoms/homePage/Slide";

import { SliderProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperThumb, wrapperThumbActive } = styles;

const Slider = ({ sliderWords }: SliderProps) => {
  const { sliderRef, slideIdx } = useVerticalCarousel();

  return (
    <div className={cx(wrapper, "keen-slider")} ref={sliderRef}>
      {sliderWords.map((word, idx) => (
        <Slide word={word} idx={idx} slideIdx={slideIdx} key={word + idx} />
      ))}
    </div>
  );
};

export default Slider;
