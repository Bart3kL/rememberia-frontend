import { cx } from "../../../../lib/utils";
import { AddNavModalProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperActive } = styles;

const AddNavModal = ({ isActive, add, modalAddRef }: AddNavModalProps) => {
  return (
    <div className={cx(wrapper, isActive && wrapperActive)} ref={modalAddRef}>
      {add.map(({ title, href }, idx) => (
        <a href={href} key={title + idx}>
          {title}
        </a>
      ))}
    </div>
  );
};

export default AddNavModal;
