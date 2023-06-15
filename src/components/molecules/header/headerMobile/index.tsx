import { useState } from "react";

import { cx } from "../../../../lib/utils";
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
  wrapperMobileMenu,
  wrapperMobileMenuClose,
  wrapperMobileMenuActive,
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
  const [isActive, setIsActive] = useState(false);

  const handleActiveMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={wrapper}>
      <div className={wrapperIcon} onClick={handleActiveMenu}>
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

      <div
        className={cx(wrapperMobileMenu, isActive && wrapperMobileMenuActive)}
      >
        <div className={wrapperMobileMenuClose} onClick={handleActiveMenu}>
          <Icons.CloseSVG />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
