import { ReactNode } from "react";

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}
