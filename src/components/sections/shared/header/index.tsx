import { useState, useEffect } from "react";

import { cx } from "../../../../lib/utils";
import { HeaderProps } from "./types";
import HeaderMobile from "../../../molecules/header/HeaderMobile";
import HeaderDesktop from "../../../molecules/header/HeaderDesktop";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTransparent } = styles;

const Header = ({ header }: HeaderProps) => {
  const [navStyle, setNavStyle] = useState(wrapperTransparent);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const scrollTarget = 20;
      setNavStyle(scrollY < scrollTarget ? wrapperTransparent : wrapper);
    });
  });

  return (
    <nav className={cx(wrapper, navStyle)}>
      <HeaderMobile {...header} />
      <HeaderDesktop {...header} />
    </nav>
  );
};

export default Header;
