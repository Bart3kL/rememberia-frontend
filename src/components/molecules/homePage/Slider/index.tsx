import { useVerticalCarousel } from "./hooks";
import { cx } from "../../../../lib/utils";

import styles from "./rwd.module.scss";
const { wrapper, wrapperThumb, wrapperThumbActive } = styles;

const Slider = () => {
  const { sliderRef, slideIdx } = useVerticalCarousel();

  const xxx = ["-ucz się", "-powtarzaj", "-notuj"];

  return (
    <div className={cx(wrapper, "keen-slider")} ref={sliderRef}>
      {xxx.map((slide, idx) => (
        <div className={cx("keen-slider__slide number-slide1")}>
          {slide}
          <div
            className={cx(wrapperThumb, idx === slideIdx && wrapperThumbActive)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
