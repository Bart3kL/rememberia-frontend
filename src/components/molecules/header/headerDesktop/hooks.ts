import { useState, useMemo } from "react";

import { SubjectsProps } from "../../../../contracts/sections/shared/header/utilityTypes";

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
  return { handleItemClick, handleSubjectsModal, isModalOpen, selectedItem };
};
