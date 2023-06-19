import { Icons } from "../../../../shared";
import { NavSubjectLinkProps } from "../../../../contracts/atoms/header/NavSubjectLink";

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
