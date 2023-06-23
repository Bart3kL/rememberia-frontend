import { HeaderProps } from "./types";
import HeaderMobile from "../../../molecules/header/headerMobile";
import HeaderDesktop from "../../../molecules/header/headerDesktop";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const Header = ({ header }: HeaderProps) => {
  return (
    <nav className={wrapper}>
      <HeaderMobile {...header} />
      <HeaderDesktop {...header} />
    </nav>
  );
};

export default Header;
