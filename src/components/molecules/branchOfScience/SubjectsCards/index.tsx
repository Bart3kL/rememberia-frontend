import { SubjectsCardsProps } from "./types";

import SubjectCard from "../../../atoms/branchOfScience/SubjectCard";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const SubjectsCards = ({
  subjects,
  subjectsLabels,
  setShowModal,
}: SubjectsCardsProps) => {
  return (
    <div className={wrapper}>
      {subjects.map((subject, idx) => (
        <SubjectCard
          {...subject}
          key={subject._id}
          {...subjectsLabels}
          onClick={() => setShowModal({ id: idx, active: true })}
        />
      ))}
    </div>
  );
};

export default SubjectsCards;
