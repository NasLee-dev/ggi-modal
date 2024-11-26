import React from "react";
import { ConfirmModalProps } from "../types/modal.types";
import { Portal } from "./Portal";
import { getModalSize } from "../utils/getModalSize";
import { cn } from "../utils/cn";

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen,
  confirmText,
  cancelText,
  onClose,
  onConfirm,
  children,
  modalStyle,
  contentStyle,
  overlayStyle,
  size = "md",
  }) => {
    const sizeStyle = getModalSize(size);
  if (!isOpen) return null;
  return (
    <Portal>
      {/* Overlay wrapper */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center",
        )}
        style={overlayStyle}
        onClick={onClose}
      >
        {/* Modal container */}
        <div
          className={cn(
            "relative bg-white rounded-lg shadow-xl flex justify-center items-center",
          )}
          onClick={(e) => e.stopPropagation()}
          style={{
            ...modalStyle,
            ...sizeStyle,
            position: "relative",
            width: modalStyle?.width || sizeStyle.width,
            height: modalStyle?.height || "auto",
            padding: modalStyle?.padding || "40px",
            flexDirection: modalStyle?.flexDirection || "column",
            gap: modalStyle?.gap || "40px",
            minHeight: "200px",
          }}
        >
          <div style={contentStyle}>
            {children}
          </div>
          {/* Button container */}
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px",
              display: "flex",
            }}
          >
            <button
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "35%",
                borderRadius: "8px",
                height: "40px",
                border: "1px solid #e5e7eb",
                backgroundColor: 'white'
              }}
            >
              <span className={cn(
                "text-center text-gray-800 text-sm font-semibold font-['Inter'] tracking-tight"
              )}
                style={{
                  color: "#4b5563",
                  textAlign: "center"

                }}
              >
                {cancelText || '취소'}
              </span>
            </button>
            <button
              onClick={onConfirm}
              style={{
                width: "65%",
                borderRadius: "8px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2563eb",
              }}
            >
              <span
                className={cn(
                  "text-center text-white text-sm font-semibold font-['Inter'] tracking-tight"
                )}
              >
                {confirmText || '확인'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}