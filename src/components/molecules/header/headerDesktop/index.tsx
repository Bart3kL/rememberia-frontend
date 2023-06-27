import { useContext } from "react";

import { useModal } from "../../../../lib/hooks/useModal";
import { useSubjectsMenu } from "./hooks";
import { HeaderDataProps } from "../../../sections/shared/Header/utilityTypes";
import { useManageModals } from "../HeaderMobile/hooks";
import { Icons } from "../../../../shared";
import { AuthContext } from "../../../../lib/context/auth-context";

import AddNavModal from "../../../atoms/header/AddNavModal";
import SearchBar from "../../../atoms/header/SearchBar";
import SearchModal from "../../../atoms/header/SearchModal";
import SubjectsModal from "../../../atoms/header/SubjectsModal";
import LoginButton from "../../../atoms/header/LoginButton";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperLogo,
  wrapperLinks,
  wrapperSearchBar,
  wrapperSearchBarIcon,
  wrapperAdd,
  wrapperAddButton,
  wrapperBtns,
} = styles;

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
  const { isActive, handleActive, modalAddRef } = useModal();
  const {
    handleItemClick,
    handleSubjectsModal,
    isModalOpen,
    selectedItem,
    modalRef,
  } = useSubjectsMenu(subjects[0]);
  const { isSearchModalActive, handleSearchModal } = useManageModals();
  const auth: any = useContext(AuthContext);

  return (
    <div className={wrapper}>
      <div className={wrapperLogo}>
        <img src={logoSrc} alt="" />
      </div>
      <div className={wrapperLinks}>
        <p>{homePageLabel.replace("📁", "")}</p>
        <p onClick={handleSubjectsModal}>{subjectsLabel}</p>
        <p>{rankingLabel}</p>
      </div>
      <div className={wrapperSearchBar}>
        <button className={wrapperSearchBarIcon} onClick={handleSearchModal}>
          <Icons.SearchSVG />
        </button>
        <SearchBar searchBarLabel={searchBarLabel} />
      </div>
      <div className={wrapperAdd}>
        <button className={wrapperAddButton} onClick={handleActive}>
          +
        </button>
        <AddNavModal isActive={isActive} add={add} modalAddRef={modalAddRef} />
      </div>
      <div className={wrapperBtns}>
        {!auth.isLoggedIn && <LoginButton {...logInLabel} />}
        {!auth.isLoggedIn && <LoginButton {...signInLabel} />}
        {auth.isLoggedIn && (
          <LoginButton label={"Wyloguj"} onClick={auth.logout} />
        )}
      </div>
      <SubjectsModal
        isModalOpen={isModalOpen}
        subjects={subjects.slice(1)}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        modalRef={modalRef}
      />
      <SearchModal
        isSearchModalActive={isSearchModalActive}
        handleSearchModal={handleSearchModal}
        searchBarLabel={searchBarLabel}
      />
    </div>
  );
};

export default headerDesktop;
