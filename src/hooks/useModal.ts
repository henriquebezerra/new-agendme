import { useState } from "react";

export const useModal = (initialState: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);
  const toggleModal = () => setIsVisible(!isVisible);

  return {
    isVisible,
    openModal,
    closeModal,
    toggleModal
  }

}