import { SubjectsProps } from "../../../sections/shared/Header/utilityTypes";

export interface SubjectsModalProps {
  isModalOpen: boolean;
  subjects: SubjectsProps[];
  handleItemClick: (v: SubjectsProps) => void;
  selectedItem: SubjectsProps;
  modalRef: React.RefObject<HTMLDivElement>;
}
