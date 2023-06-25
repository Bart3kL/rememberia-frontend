import { SubjectsProps } from "../../../sections/shared/Header/utilityTypes";

export interface NavSubjectLinkProps {
  navItem: SubjectsProps;
  handleItemClick: (v: SubjectsProps) => void;
}
