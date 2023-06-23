import { cx } from "../../../../lib/utils";

import { SlideProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperThumb, wrapperThumbActive } = styles;

const Slide = ({ word, slideIdx, idx }: SlideProps) => {
  return (
    <div className={cx("keen-slider__slide number-slide1", wrapper)}>
      {word}
      <div
        className={cx(wrapperThumb, idx === slideIdx && wrapperThumbActive)}
      ></div>
    </div>
  );
};

export default Slide;
