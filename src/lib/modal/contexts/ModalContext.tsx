import { createContext } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import React from "react";

export interface ModalContextType {
  modals: Record<string, boolean>;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  closeAllModals: () => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
  defaultModals?: string[];
}

const ModalContext = createContext<ModalContextType>({
  modals: {},
  openModal: () => {},
  closeModal: () => {},
  closeAllModals: () => {},
})

export const ModalProvider: React.FC<ModalProviderProps> = ({ children, defaultModals = [] }) => {
  const [modals, setModals] = useState<Record<string, boolean>>(() => {
    const initialModals: Record<string, boolean> = {};
    defaultModals.forEach((modalName) => {
      initialModals[modalName] = true;
    })
    return initialModals;
  });


  const openModal = useCallback((modalName: string) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: true,
    }));
  }, []);

  const closeModal = useCallback((modalName: string) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: false,
    }));
  }, []);

  return (
    <ModalContext.Provider value={{
      modals,
      openModal,
      closeModal,
      closeAllModals: () => setModals({}),
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext는 ModalProvider 내부에서 사용되어야 합니다.");
  }
  return context;
}