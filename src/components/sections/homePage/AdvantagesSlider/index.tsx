import Slider from "../../../molecules/homePage/Slider";

import { AdvantagesSliderProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AdvantagesSlider = ({ title, sliderWords }: AdvantagesSliderProps) => {
  return (
    <section className={wrapper}>
      <h1>{title}</h1>
      <Slider sliderWords={sliderWords} />
    </section>
  );
};

export default AdvantagesSlider;
