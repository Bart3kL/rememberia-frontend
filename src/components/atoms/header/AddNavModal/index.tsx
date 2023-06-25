import { Link } from "react-router-dom";

import { cx } from "../../../../lib/utils";
import { AddNavModalProps } from "./types";

import styles from "./rwd.module.scss";
const { wrapper, wrapperActive } = styles;

const AddNavModal = ({ isActive, add, modalAddRef }: AddNavModalProps) => {
  return (
    <div className={cx(wrapper, isActive && wrapperActive)} ref={modalAddRef}>
      {add.map(({ title, href }, idx) => (
        <Link to={href} key={title + idx}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default AddNavModal;
