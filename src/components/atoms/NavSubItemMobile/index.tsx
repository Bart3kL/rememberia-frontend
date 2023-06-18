import { NavSubItemMobileProps } from "../../../contracts/atoms/NavSubItemMobile";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const NavSubItemMobile = ({ title, href }: NavSubItemMobileProps) => {
  return (
    <li className={wrapper}>
      <a href={href}>{title}</a>
    </li>
  );
};

export default NavSubItemMobile;
