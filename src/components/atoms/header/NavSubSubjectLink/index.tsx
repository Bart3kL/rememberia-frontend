import { Link } from "react-router-dom";

import { NavSubSubjectLinkProps } from "./types";

const NavSubSubjectLink = ({ title, href }: NavSubSubjectLinkProps) => {
  return <Link to={href}>{title}</Link>;
};

export default NavSubSubjectLink;
