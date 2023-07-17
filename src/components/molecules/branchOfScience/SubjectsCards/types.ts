import { BranchOfScienceProps } from "../../../../pages/branchOfScience/types";
import { SubjectCardProps } from "../../../atoms/branchOfScience/SubjectCard/types";

export interface SubjectsCardsProps {
  subjects: {
    _id: string;
    subjectTitle: string;
    studySets: SubjectCardProps["studySets"];
  }[];
  subjectsLabels: BranchOfScienceProps["subjectsLabels"];
  setShowModal: (v: any) => void;
}
