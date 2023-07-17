import { SubjectCardProps } from "../../../atoms/branchOfScience/SubjectCard/types";

export interface SubjectsCardsModalProps {
  subjects: {
    _id: string;
    subjectTitle: string;
    studySets: SubjectCardProps["studySets"];
  }[];
  showModal: { active: boolean; id: number };
  setShowModal: (v: any) => void;
}
