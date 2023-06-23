import { Icons } from "../../../../shared";
import { NavSubjectLinkProps } from "./types";

const NavSubjectLink = ({ navItem, handleItemClick }: NavSubjectLinkProps) => {
  return (
    <a onMouseEnter={() => handleItemClick(navItem)}>
      {navItem.title}
      <p>
        <Icons.ArrowDownSVG />
      </p>
    </a>
  );
};

export default NavSubjectLink;
