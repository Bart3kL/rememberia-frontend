import { Link } from "react-router-dom";

import { Icons } from "../../../../shared";
import { NavSubjectLinkProps } from "./types";

const NavSubjectLink = ({ navItem, handleItemClick }: NavSubjectLinkProps) => {
  return (
    <Link to={navItem.href} onMouseEnter={() => handleItemClick(navItem)}>
      {navItem.title}
      <p>
        <Icons.ArrowDownSVG />
      </p>
    </Link>
  );
};

export default NavSubjectLink;
