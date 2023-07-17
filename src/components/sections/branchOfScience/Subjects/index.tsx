import { useState } from "react";

import { SubjectsProps } from "./types";

import SubjectsCards from "../../../molecules/branchOfScience/SubjectsCards";
import SubjectsCardsModal from "../../../molecules/branchOfScience/SubjectsCardsModal";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const Subjects = ({ subjects, subjectsLabels }: SubjectsProps) => {
  const [showModal, setShowModal] = useState({ id: -1, active: false });

  return (
    <section className={wrapper}>
      <SubjectsCards
        subjects={subjects}
        subjectsLabels={subjectsLabels}
        setShowModal={setShowModal}
      />
      <SubjectsCardsModal
        showModal={showModal}
        setShowModal={setShowModal}
        subjects={subjects}
      />
    </section>
  );
};

export default Subjects;
