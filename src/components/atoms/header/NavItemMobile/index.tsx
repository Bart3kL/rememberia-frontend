import { Link } from "react-router-dom";

import { cx } from "../../../../lib/utils";
import { Icons } from "../../../../shared";

import NavSubItemMobile from "../NavSubItemMobile";
import { NavItemMobileProps } from "./types";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperActive,
  wrapperTitle,
  wrapperIcon,
  wrapperIconActive,
  wrapperSubSubjects,
  wrapperSubSubjectsActive,
} = styles;

const NavItemMobile = ({
  href,
  idx,
  title,
  topics,
  isActiveTab,
  handleActiveTab,
}: NavItemMobileProps) => {
  return (
    <li
      className={cx(wrapper, isActiveTab === idx && wrapperActive)}
      onClick={() => handleActiveTab(idx)}
    >
      <div className={wrapperTitle}>
        <Link to={href}>{title}</Link>
        <p
          className={cx(wrapperIcon, isActiveTab === idx && wrapperIconActive)}
        >
          <Icons.ArrowDownSVG />
        </p>
      </div>
      <ul
        className={cx(
          wrapperSubSubjects,
          isActiveTab === idx && wrapperSubSubjectsActive
        )}
      >
        {topics.map((topic, idx) => (
          <NavSubItemMobile {...topic} key={topic.title + idx} />
        ))}
      </ul>
    </li>
  );
};

export default NavItemMobile;
