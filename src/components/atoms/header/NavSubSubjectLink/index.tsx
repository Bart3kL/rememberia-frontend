import { NavSubSubjectLinkProps } from "../../../../contracts/atoms/header/NavSubSubjectLink";

const NavSubSubjectLink = ({ title, href }: NavSubSubjectLinkProps) => {
  return <a key={href}>{title}</a>;
};

export default NavSubSubjectLink;
