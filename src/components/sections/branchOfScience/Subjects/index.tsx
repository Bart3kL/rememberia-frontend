import { useState } from "react";

import { SubjectsProps } from "./types";

import { Modal } from "../../../molecules/shared/Modal";
import SubjectsCardsProps from "../../../molecules/branchOfScience/SubjectsCards";

import styles from "./rwd.module.scss";
const { wrapper, wrapperSubjects } = styles;

const Subjects = ({ subjects, subjectsLabels }: SubjectsProps) => {
  const [showModal, setShowModal] = useState({ id: -1, active: false });

  return (
    <section className={wrapper}>
      <SubjectsCardsProps
        subjects={subjects}
        subjectsLabels={subjectsLabels}
        setShowModal={setShowModal}
      />
      <div>
        <Modal
          show={showModal.active}
          onClose={() => setShowModal({ id: -1, active: false })}
        >
          {showModal.active && <div>{subjects[showModal.id].subjectTitle}</div>}
        </Modal>
      </div>
    </section>
  );
};

export default Subjects;
