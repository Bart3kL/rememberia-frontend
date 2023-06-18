import { HeaderDataProps } from "../../../../contracts/sections/shared/header/utilityTypes";
import SearchBar from "../../../atoms/SearchBar";
import LoginButton from "../../../atoms/LoginButton";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLogo, wrapperLinks, wrapperAdd, wrapperBtns } = styles;

const headerDesktop = ({
  add,
  homePageLabel,
  logInLabel,
  logoSrc,
  rankingLabel,
  searchBarLabel,
  signInLabel,
  subjectsLabel,
  subjects,
}: HeaderDataProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperLogo}>
        <img src={logoSrc} alt="" />
      </div>
      <div className={wrapperLinks}>
        <p>{homePageLabel.replace("📁", "")}</p>
        <p>{subjectsLabel}</p>
        <p>{rankingLabel}</p>
      </div>
      <SearchBar searchBarLabel={searchBarLabel} />
      <div className={wrapperAdd}>+</div>
      <div className={wrapperBtns}>
        <LoginButton label={logInLabel} />
        <LoginButton label={signInLabel} />
      </div>
    </div>
  );
};

export default headerDesktop;
