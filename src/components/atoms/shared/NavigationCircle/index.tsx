import { cx } from "../../../../lib/utils";

import { NavigationCircleProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperCircle, wrapperCircleActive, wrapperTitle } = styles;

const NavigationCircle = ({ active, number, title }: NavigationCircleProps) => {
  return (
    <div className={wrapper}>
      <div className={cx(wrapperCircle, active && wrapperCircleActive)}>
        {number}
      </div>
      <p className={wrapperTitle}>{title}</p>
    </div>
  );
};

export default NavigationCircle;
