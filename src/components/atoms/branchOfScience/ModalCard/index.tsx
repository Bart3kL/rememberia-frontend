import { numberOfTerms } from "./utils";

import { SubjectCardProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperSummary, wrapperSummaryBox, wrapperBtn } =
  styles;

const ModalCard = ({ title, author, words }: any) => {
  return (
    <div className={wrapper}>
      <h3 className={wrapperTitle}>{title}</h3>
      <div className={wrapperSummary}>
        <div className={wrapperSummaryBox}>4</div>
        <div>Anders_21</div>
      </div>
    </div>
  );
};

export default ModalCard;
