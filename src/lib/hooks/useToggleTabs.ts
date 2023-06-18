import { useState, useCallback } from "react";

export const useToggleTabs = () => {
  const [isActiveTab, setIsActiveTab] = useState(-1);

  const handleActiveTab = useCallback((index: number) => {
    setIsActiveTab((prevState) => (prevState !== index ? index : -1));
  }, []);

  return {
    isActiveTab,
    handleActiveTab,
  };
};
