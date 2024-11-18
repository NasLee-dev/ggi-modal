import { X } from "lucide-react";
import React from "react";
import { BaseModalProps } from "../types/modal.types";
import { Portal } from "../Portal";

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
        />
        <div 
          className="relative z-[101] w-full max-w-lg rounded-lg bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X />
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </Portal>
  );
};
