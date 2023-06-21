import Slider from "../../../molecules/homePage/Slider";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const AdvantagesSlider = () => {
  return (
    <section className={wrapper}>
      <h1>Odkryj potęgę nauki z naszą platformą</h1>
      <Slider />
    </section>
  );
};

export default AdvantagesSlider;
