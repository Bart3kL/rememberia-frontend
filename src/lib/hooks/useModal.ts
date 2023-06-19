import { useState } from "react";

export const useModal = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };
  return {
    isActive,
    handleActive,
  };
};
