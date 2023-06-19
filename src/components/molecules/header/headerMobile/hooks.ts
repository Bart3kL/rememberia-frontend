import { useState } from "react";

export const useManageModals = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isSearchModalActive, setIsSearchModalActive] = useState(false);

  const handleSearchModal = () => {
    setIsSearchModalActive((prev) => !prev);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuActive((prev) => !prev);
  };

  return {
    isMobileMenuActive,
    isSearchModalActive,
    handleSearchModal,
    handleMobileMenu,
  };
};
