import { NavSubSubjectLinkProps } from "./types";

const NavSubSubjectLink = ({ title, href }: NavSubSubjectLinkProps) => {
  return <a key={href}>{title}</a>;
};

export default NavSubSubjectLink;
