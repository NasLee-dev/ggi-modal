import React from "react";
import AlertClose from "../icons/AlertClose";
import { BaseModalProps } from "../types/modal.types";
import { Portal } from "../Portal";

interface AlertModalProps extends BaseModalProps {
  description?: string;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        <div className="flex justify-center items-center bg-black/60 rounded-3xl w-[480px] h-[240px] relative">
          <div className="flex items-start justify-end p-5 absolute right-0 top-0">
            <AlertClose close={onClose} />
          </div>
          <div className="flex w-full justify-center items-center">
            <p className="flex flex-col">
              <span className="text-center text-white text-xl font-bold font-['SUIT'] leading-[31px]">
                {title}
              </span>
              <span className="text-center text-white text-xl font-bold font-['SUIT'] leading-[31px]">
                {children}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Portal>
  );
};