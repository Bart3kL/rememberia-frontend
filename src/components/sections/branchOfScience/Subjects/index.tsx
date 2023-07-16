import { SubjectsProps } from "./types";

import SubjectCard from "../../../atoms/branchOfScience/SubjectCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperSubjects } = styles;

const Subjects = ({ subjects, subjectsLabels }: SubjectsProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperSubjects}>
        {subjects.map((subject) => (
          <SubjectCard {...subject} key={subject._id} {...subjectsLabels} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Subjects;
