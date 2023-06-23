import { TutorialButtonProps } from "./types";

import { Icons } from "../../../../shared";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const TutorialButton = ({ label }: TutorialButtonProps) => {
  return (
    <section className={wrapper}>
      <button>
        {label}
        <Icons.ArrowDownWardSVG />
      </button>
    </section>
  );
};

export default TutorialButton;
