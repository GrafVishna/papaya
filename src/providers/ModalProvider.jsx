import React, { createContext, useState, useContext } from "react";

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
