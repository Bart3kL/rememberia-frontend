import { useState, useMemo, useEffect, useRef } from "react";

import { SubjectsProps } from "../../../sections/shared/Header/utilityTypes";

export const useSubjectsMenu = (subjects: SubjectsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(subjects);

  const handleSubjectsModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleItemClick = useMemo(
    () => (item: SubjectsProps) => {
      setSelectedItem(item);
    },
    []
  );

  const isNode = (target: EventTarget | null): target is Node => {
    return target !== null && target instanceof Node;
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        isNode(event.target) &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    handleItemClick,
    handleSubjectsModal,
    isModalOpen,
    selectedItem,
    modalRef,
  };
};
