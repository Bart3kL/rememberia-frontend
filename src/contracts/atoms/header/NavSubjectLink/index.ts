import { SubjectsProps } from "../../../sections/shared/header/utilityTypes";

export interface NavSubjectLinkProps {
  navItem: SubjectsProps;
  handleItemClick: (v: SubjectsProps) => void;
}
