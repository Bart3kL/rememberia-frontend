import { HeaderDataProps } from "./../../../sections/shared/header/utilityTypes";
import { Icons } from "../../../../shared";
import LoginButton from "../../../atoms/LoginButton";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperIcon,
  wrapperSearchBar,
  wrapperSearchBarBar,
  wrapperSearchBarBarLabelIcon,
  wrapperSearchBarBarLabel,
  wrapperSearchBarIcon,
  wrapperLoginBtns,
} = styles;

const HeaderMobile = ({
  add,
  homePageLabel,
  logInLabel,
  logo,
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
        <div className={wrapperSearchBarBar}>
          <label htmlFor="search" className={wrapperSearchBarBarLabel}>
            <div className={wrapperSearchBarBarLabelIcon}>
              <Icons.SearchSVG />
            </div>
            <input type="text" id="search" placeholder={searchBarLabel} />
          </label>
        </div>
      </div>
      <div className={wrapperLoginBtns}>
        <LoginButton label={logInLabel} />
        <LoginButton label={signInLabel} />
      </div>
    </div>
  );
};

export default HeaderMobile;
