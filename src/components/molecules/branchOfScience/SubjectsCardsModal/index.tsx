import { SubjectsCardsModalProps } from "./types";

import { Modal } from "../../shared/Modal";
import ModalCard from "../../../atoms/branchOfScience/ModalCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperSets } = styles;

const SubjectsCardsModal = ({
  subjects,
  showModal,
  setShowModal,
}: SubjectsCardsModalProps) => {
  return (
    <Modal
      show={showModal.active}
      onClose={() => setShowModal({ id: -1, active: false })}
    >
      {showModal.active && (
        <div className={wrapper}>
          <h3 className={wrapperTitle}>
            {subjects[showModal.id].subjectTitle}
          </h3>
          <div className={wrapperSets}>
            {subjects[showModal.id].studySets.map((set) => (
              <ModalCard {...set} />
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SubjectsCardsModal;
