import { Link } from "react-router-dom";

import { NavSubSubjectLinkProps } from "../NavSubSubjectLink/types";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const NavSubItemMobile = ({ title, href }: NavSubSubjectLinkProps) => {
  return (
    <li className={wrapper}>
      <Link to={href}>{title}</Link>
    </li>
  );
};

export default NavSubItemMobile;
