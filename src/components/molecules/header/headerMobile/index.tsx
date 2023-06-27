import { useContext } from "react";
import { Link } from "react-router-dom";

import { cx } from "../../../../lib/utils";
import { AuthContext } from "../../../../lib/context/auth-context";
import { Icons } from "../../../../shared";
import { useToggleTabs } from "../../../../lib/hooks/useToggleTabs";
import { useManageModals } from "./hooks";
import { HeaderDataProps } from "../../../sections/shared/Header/utilityTypes";

import LoginButton from "../../../atoms/header/LoginButton";
import SearchBar from "../../../atoms/header/SearchBar";
import NavItemMobile from "../../../atoms/header/NavItemMobile";
import SearchModal from "../../../atoms/header/SearchModal";

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
  wrapperMobileMenuNav,
  wrapperMobileMenuNavItem,
} = styles;

const HeaderMobile = ({
  homePageLabel,
  logInLabel,
  searchBarLabel,
  logoSrc,
  signInLabel,
  subjects,
}: HeaderDataProps) => {
  const {
    isMobileMenuActive,
    isSearchModalActive,
    handleSearchModal,
    handleMobileMenu,
  } = useManageModals();

  const { isActiveTab, handleActiveTab } = useToggleTabs();
  const auth: any = useContext(AuthContext);

  return (
    <div className={wrapper}>
      <div className={wrapperIcon} onClick={handleMobileMenu}>
        <Icons.MenuSVG />
      </div>
      <div className={wrapperSearchBar}>
        <button className={wrapperSearchBarIcon} onClick={handleSearchModal}>
          <Icons.SearchSVG />
        </button>
        <SearchBar searchBarLabel={searchBarLabel} />
      </div>
      <div className={wrapperLoginBtns}>
        {!auth.isLoggedIn && <LoginButton {...logInLabel} />}
        {!auth.isLoggedIn && <LoginButton {...signInLabel} />}
        {auth.isLoggedIn && (
          <LoginButton label={"Wyloguj"} onClick={auth.logout} />
        )}
      </div>
      <SearchModal
        isSearchModalActive={isSearchModalActive}
        handleSearchModal={handleSearchModal}
        searchBarLabel={searchBarLabel}
      />
      <div
        className={cx(
          wrapperMobileMenu,
          isMobileMenuActive && wrapperMobileMenuActive
        )}
      >
        <div className={wrapperMobileMenuClose} onClick={handleMobileMenu}>
          <Icons.CloseSVG />
        </div>
        <div>
          <img src={logoSrc} alt="" />
        </div>
        <ul className={wrapperMobileMenuNav}>
          <li className={wrapperMobileMenuNavItem}>
            <Link to="/">{homePageLabel}</Link>
          </li>
          {subjects.map((subject, idx) => (
            <NavItemMobile
              key={subject.title + idx}
              idx={idx}
              {...subject}
              isActiveTab={isActiveTab}
              handleActiveTab={handleActiveTab}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
