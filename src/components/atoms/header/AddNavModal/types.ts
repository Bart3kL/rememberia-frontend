import { AddProps } from "../../../sections/shared/Header/utilityTypes";

export interface AddNavModalProps {
  isActive: boolean;
  add: AddProps[];
  modalAddRef: React.RefObject<HTMLDivElement>;
}
