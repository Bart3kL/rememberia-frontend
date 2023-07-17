import { BranchOfScienceProps } from "../../../../pages/branchOfScience/types";
import { SubjectCardProps } from "../../../atoms/branchOfScience/SubjectCard/types";

export interface SubjectsProps {
  subjects: {
    _id: string;
    subjectTitle: string;
    studySets: SubjectCardProps["studySets"];
  }[];
  subjectsLabels: BranchOfScienceProps["subjectsLabels"];
}
