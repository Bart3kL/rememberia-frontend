import { NavSubSubjectLinkProps } from "../NavSubSubjectLink/types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const NavSubItemMobile = ({ title, href }: NavSubSubjectLinkProps) => {
  return (
    <li className={wrapper}>
      <a href={href}>{title}</a>
    </li>
  );
};

export default NavSubItemMobile;
