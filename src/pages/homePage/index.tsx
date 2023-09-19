import { useLoaderData } from 'react-router-dom';

import { HomePageProps } from './types';

import Header from '../../components/sections/shared/header';
import AdvantagesSlider from '../../components/sections/homePage/AdvantagesSlider';
import Description from '../../components/sections/homePage/Description';
import TutorialButton from '../../components/sections/homePage/TutorialButton';

import styles from './base.module.scss';
const { wrapper } = styles;

const HomePage = () => {
  const {
    header,
    backgroundStyles,
    advantagesSlider,
    description,
    tutorialBtnLabel,
  } = useLoaderData() as HomePageProps;

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
        <TutorialButton label={tutorialBtnLabel} />
      </main>
    </>
  );
};

export default HomePage;
