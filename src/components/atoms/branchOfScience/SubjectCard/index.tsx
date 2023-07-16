import { numberOfTerms } from "./utils";

import { SubjectCardProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperSummary, wrapperSummaryBox, wrapperBtn } =
  styles;

const SubjectCard = ({
  subjectTitle,
  studySets,
  preview,
  set,
  sets,
}: SubjectCardProps) => {
  return (
    <div className={wrapper}>
      <h3 className={wrapperTitle}>{subjectTitle}</h3>
      <div className={wrapperSummary}>
        <div className={wrapperSummaryBox}>
          {studySets.length === 1 ? set : sets}
          {studySets.length}
        </div>
        <div className={wrapperSummaryBox}>{numberOfTerms(studySets)}</div>
      </div>
      <button className={wrapperBtn}>{preview}</button>
    </div>
  );
};

export default SubjectCard;
