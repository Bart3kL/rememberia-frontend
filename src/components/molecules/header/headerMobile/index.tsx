import { HeaderDataProps } from "../../../../contracts/sections/shared/header/utilityTypes";

import { Icons } from "../../../../shared";
import LoginButton from "../../../atoms/LoginButton";
import SearchBar from "../../../atoms/SearchBar";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperIcon,
  wrapperSearchBar,
  wrapperSearchBarIcon,
  wrapperLoginBtns,
} = styles;

const HeaderMobile = ({
  add,
  homePageLabel,
  logInLabel,
  logoSrc,
  rankingLabel,
  searchBarLabel,
  signInLabel,
  subjects,
}: HeaderDataProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperIcon}>
        <Icons.MenuSVG />
      </div>
      <div className={wrapperSearchBar}>
        <button className={wrapperSearchBarIcon}>
          <Icons.SearchSVG />
        </button>
        <SearchBar searchBarLabel={searchBarLabel} />
      </div>
      <div className={wrapperLoginBtns}>
        <LoginButton label={logInLabel} />
        <LoginButton label={signInLabel} />
      </div>
    </div>
  );
};

export default HeaderMobile;
