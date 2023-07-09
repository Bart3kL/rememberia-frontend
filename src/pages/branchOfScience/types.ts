import { HeaderProps } from "../../components/sections/shared/Header/types";
import { AdvantagesSliderProps } from "../../components/sections/homePage/AdvantagesSlider/types";

export interface HomePageProps {
  header: {
    fields: HeaderProps["header"];
  };
  backgroundStyles: {
    backgroundBlurUrl: string;
  };
  advantagesSlider: AdvantagesSliderProps;
  description: string;
  tutorialBtnLabel: string;
}
