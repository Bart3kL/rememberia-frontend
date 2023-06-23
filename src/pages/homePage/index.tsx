import { useLoaderData } from "react-router-dom";

import Header from "../../components/sections/shared/header";
import AdvantagesSlider from "../../components/sections/homePage/AdvantagesSlider";
import Description from "../../components/atoms/homePage/Description";

import styles from "./base.module.scss";
const { wrapper } = styles;

const HomePage = () => {
  const { header, backgroundStyles, advantagesSlider, description } =
    useLoaderData() as any;

  return (
    <>
      <Header header={header.fields} />
      <main
        className={wrapper}
        style={{
          backgroundImage: `url(${backgroundStyles.backgroundBlurUrl})`,
        }}
      >
        <AdvantagesSlider {...advantagesSlider} />
        <Description description={description} />
      </main>
    </>
  );
};

export default HomePage;
