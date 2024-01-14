import React, { createContext, useState, useContext } from "react";

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [modalIn, setModalSIn] = useState(false);
  const [modalOut, setModalOut] = useState(false);
  const [modalAvatarEdit, setModalAvatarEdit] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalIn,
        setModalSIn,
        modalOut,
        setModalOut,
        modalAvatarEdit,
        setModalAvatarEdit,
      }}
    >
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
