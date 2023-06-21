import { Fragment } from "react";

import { cx } from "../../../../lib/utils";
import { SubjectsModalProps } from "../../../../contracts/atoms/SubjectsModal";

import NavSubjectLink from "../NavSubjectLink";
import NavSubSubjectLink from "../NavSubSubjectLink";

import styles from "./rwd.module.scss";
const { wrapper, wrapperActive, wrapperLeft, wrapperRight } = styles;

const SubjectsModal = ({
  isModalOpen,
  subjects,
  handleItemClick,
  selectedItem,
  modalRef,
}: SubjectsModalProps) => {
  return (
    <div className={cx(wrapper, isModalOpen && wrapperActive)} ref={modalRef}>
      <div className={wrapperLeft}>
        {subjects.map((navItem, idx) => (
          <NavSubjectLink
            navItem={navItem}
            key={navItem.title + idx}
            handleItemClick={handleItemClick}
          />
        ))}
      </div>
      <div className={wrapperRight}>
        {selectedItem && (
          <Fragment>
            {selectedItem.topics.map((subSubject, idx) => (
              <NavSubSubjectLink {...subSubject} key={subSubject.title + idx} />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default SubjectsModal;
