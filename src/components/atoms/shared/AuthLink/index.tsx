import { NavLink } from "react-router-dom";

import { cx } from "../../../../lib/utils";
import { Icons } from "../../../../shared";

import { AuthLinkProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperActive } = styles;

const AuthLink = ({ href, label }: AuthLinkProps) => {
  return (
    <h3>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? cx(wrapper, wrapperActive) : wrapper
        }
      >
        {label}
        <Icons.UnderlineSVG />
      </NavLink>
    </h3>
  );
};

export default AuthLink;
