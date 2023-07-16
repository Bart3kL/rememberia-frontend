import { Icons } from "../../../../shared";
import { usePreventBackgroundScrolling } from "./modalUtils";
import { cx } from "../../../../lib/utils";
import { ModalProps } from "./types";

import { Curtain } from "./Curtain";
import { Portal } from "./Portal";

import styles from "./rwd.module.scss";
const { wrapper, wrapperActive } = styles;

export function Modal({ show, children, onClose }: ModalProps) {
  usePreventBackgroundScrolling(show);

  return (
    <Portal>
      <div>
        <Curtain show={show} onClose={onClose} />
        <div
          className={cx(wrapper, show && wrapperActive)}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose}>
            <Icons.CloseSVG />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
