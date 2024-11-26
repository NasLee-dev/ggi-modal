import React from "react";
import { BaseModalProps } from "../types/modal.types";
import { Portal } from "./Portal";
import { FooterButton } from "../../common/components/FooterButton";
import { getModalSize } from "../utils/getModalSize";
import { DefaultStyle } from "../constants/defaultStyle";
import AlertClose from "../icons/AlertClose";

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
  size = "lg",
  position = "center",
  ...props
}) => {
  const modalSize = getModalSize(size);
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-[100] flex items-center justify-center" style={overlayStyle}>
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
          style={DefaultStyle.overlay}
        />
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            ...modalStyle,
            ...DefaultStyle.modal,
            position: "relative",
            width: modalStyle?.width || modalSize.width,
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
            <div
              className="rounded-full p-1 transition-colors"
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "-25px",
                right: "-20px",
              }}
            >
              <AlertClose 
                close={onClose}
              />
            </div>
          </div>

          {/* 컨텐츠 영역 */}
          <div 
            style={{
              ...DefaultStyle.children,
              ...childrenStyle,
              overflowY: "auto",
              flex: 1,
            }}
          >
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