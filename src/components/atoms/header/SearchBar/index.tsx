import { Icons } from "../../../../shared";
import { SearchBarProps } from "../../../../contracts/atoms/header/SearchBar";

import styles from "./rwd.module.scss";
const { wrapper, wrapperLabel, wrapperLabelIcon } = styles;

const SearchBar = ({ searchBarLabel }: SearchBarProps) => {
  return (
    <div className={wrapper}>
      <label htmlFor="search" className={wrapperLabel}>
        <div className={wrapperLabelIcon}>
          <Icons.SearchSVG />
        </div>
        <input type="text" id="search" placeholder={searchBarLabel} />
      </label>
    </div>
  );
};

export default SearchBar;
