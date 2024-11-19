import React from "react";
import { BaseModalProps } from "../types/modal.types";
import { Portal } from "./Portal";
import { X } from "lucide-react";
import { FooterButton } from "../../common/components/FooterButton";
import { getModalSize } from "../utils/getModalSize";

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  overlayStyle,
  modalStyle,
  titleStyle,
  childrenStyle,
  confirmText,
  cancelText,
  onConfirm,
  size = "md",
  position = "center",
  ...props
}) => {
  const sizeStyle = getModalSize(size);
  const defaultStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modal: {
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0px 20px 13px 0px rgba(0, 0, 0, 0.03), 0px 8px 5px 0px rgba(0, 0, 0, 0.08)",
      display: "flex",
      zIndex: 101,
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    children: {
      padding: "1rem",
      paddingBottom: "80px",
    },
  }

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[100] flex items-center justify-center" style={overlayStyle}>
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
          style={defaultStyle.overlay}
        />
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            ...modalStyle,
            ...sizeStyle,
            ...defaultStyle.modal,
            position: "relative",
            width: modalStyle?.width || "550px",
            height: modalStyle?.height || "auto",
            padding: modalStyle?.padding || "40px",
            flexDirection: modalStyle?.flexDirection || "column",
            gap: modalStyle?.gap || "40px",
            minHeight: "200px",
          }}
        >
          {/* 헤더 영역 */}
          <div className="flex w-full items-center relative">
            <h2 
              className="text-xl font-semibold w-full text-center" 
              style={titleStyle}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "-25px",
                right: "-20px",
              }}
            >
              <X />
            </button>
          </div>

          {/* 컨텐츠 영역 */}
          <div style={{
            ...defaultStyle.children,
            ...childrenStyle,
            overflowY: "auto",
            flex: 1,
          }}>
            {children}
          </div>

          {/* 푸터 버튼 영역 */}
          <FooterButton 
            onClose={onClose}
            onConfirm={onConfirm}
            confirmText={confirmText || '선택하기'}
            cancelText={cancelText || '취소하기'}
          />
        </div>
      </div>
    </Portal>
  );
};