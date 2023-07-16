import { cx } from "../../../../../lib/utils";

import { CurtainProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperShow } = styles;

export function Curtain({ onClose, show }: CurtainProps) {
  return <div className={cx(wrapper, show && wrapperShow)} onClick={onClose} />;
}
