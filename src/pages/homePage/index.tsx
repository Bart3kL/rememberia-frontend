import { useLoaderData } from "react-router-dom";

import Header from "../../components/sections/shared/header";
import AdvantagesSlider from "../../components/sections/homePage/AdvantagesSlider";

import styles from "./base.module.scss";
const { wrapper } = styles;

const HomePage = () => {
  const { header, mainSection } = useLoaderData() as any;
  return (
    <>
      <Header header={header.fields} />
      <main
        className={wrapper}
        style={{
          backgroundColor: mainSection.backgroundColor,
          backgroundImage: `url(${mainSection.backgroundBlurUrl})`,
        }}
      >
        <AdvantagesSlider {...mainSection} />
      </main>
    </>
  );
};

export default HomePage;
