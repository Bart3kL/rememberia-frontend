import { SubjectsProps } from "../../sections/shared/header/utilityTypes";

export interface SubjectsModalProps {
  isModalOpen: boolean;
  subjects: SubjectsProps[];
  handleItemClick: (v: SubjectsProps) => void;
  selectedItem: SubjectsProps;
  modalRef: React.RefObject<HTMLDivElement>;
}
