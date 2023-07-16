import { useState } from "react";

import { SubjectsProps } from "./types";

import { Modal } from "../../../molecules/shared/Modal";
import SubjectCard from "../../../atoms/branchOfScience/SubjectCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperSubjects } = styles;

const Subjects = ({ subjects, subjectsLabels }: SubjectsProps) => {
  const [showModal, setShowModal] = useState({ id: -1, active: false });

  return (
    <div className={wrapper}>
      <div className={wrapperSubjects}>
        {subjects.map((subject, idx) => (
          <SubjectCard
            {...subject}
            key={subject._id}
            {...subjectsLabels}
            onClick={() => setShowModal({ id: idx, active: true })}
          />
        ))}
      </div>
      <div>
        <Modal
          show={showModal.active}
          onClose={() => setShowModal({ id: -1, active: false })}
        >
          {showModal.active && <div>{subjects[showModal.id].subjectTitle}</div>}
        </Modal>
      </div>
    </div>
  );
};

export default Subjects;
