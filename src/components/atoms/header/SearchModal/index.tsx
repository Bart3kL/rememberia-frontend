import { cx } from "../../../../lib/utils";
import { Icons } from "../../../../shared";
import { SearchModalProps } from "./types";

import SearchBar from "../SearchBar";

import styles from "./rwd.module.scss";
const { wrapper, wrapperActive, wrapperIcon } = styles;

const SearchModal = ({
  isSearchModalActive,
  handleSearchModal,
  searchBarLabel,
}: SearchModalProps) => {
  return (
    <div className={cx(wrapper, isSearchModalActive && wrapperActive)}>
      <span className={wrapperIcon} onClick={handleSearchModal}>
        <Icons.ArrowLeftSVG />
      </span>
      <SearchBar searchBarLabel={searchBarLabel} />
    </div>
  );
};

export default SearchModal;
