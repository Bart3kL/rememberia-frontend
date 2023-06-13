import { HeaderDataProps } from "./../../../sections/shared/header/utilityTypes";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const headerDesktop = ({
  add,
  homePageLabel,
  logInLabel,
  logo,
  rankingLabel,
  searchBarLabel,
  signInLabel,
  subjects,
}: HeaderDataProps) => {
  return <div className={wrapper}>desktop</div>;
};

export default headerDesktop;
