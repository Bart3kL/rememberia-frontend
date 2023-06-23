import { useModal } from "../../../../lib/hooks/useModal";
import { useSubjectsMenu } from "./hooks";
import { HeaderDataProps } from "../../../sections/shared/header/utilityTypes";

import AddNavModal from "../../../atoms/header/AddNavModal";
import SearchBar from "../../../atoms/header/SearchBar";
import SubjectsModal from "../../../atoms/header/SubjectsModal";
import LoginButton from "../../../atoms/header/LoginButton";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperLogo,
  wrapperLinks,
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
      <SearchBar searchBarLabel={searchBarLabel} />
      <div className={wrapperAdd}>
        <button className={wrapperAddButton} onClick={handleActive}>
          +
        </button>
        <AddNavModal isActive={isActive} add={add} modalAddRef={modalAddRef} />
      </div>
      <div className={wrapperBtns}>
        <LoginButton label={logInLabel} />
        <LoginButton label={signInLabel} />
      </div>
      <SubjectsModal
        isModalOpen={isModalOpen}
        subjects={subjects.slice(1)}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        modalRef={modalRef}
      />
    </div>
  );
};

export default headerDesktop;
