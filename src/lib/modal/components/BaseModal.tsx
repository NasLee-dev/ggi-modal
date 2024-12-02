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
hasDimmed = false,
onCancelButton,
closeOnOverlayClick = true,
...props
}) => {
const modalSize = getModalSize(size);

const getPositionStyle = () => {
  const styles = {
    top: { alignItems: 'flex-start' },
    bottom: { alignItems: 'flex-end' },
    center: { alignItems: 'center' }
  };
  return styles[position] || styles.center;
};

if (!isOpen) return null;

return (
  <Portal>
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        ...getPositionStyle(),
        ...overlayStyle
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          transition: 'opacity 0.2s',
          backgroundColor: hasDimmed ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
        }}
        onClick={onClose}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          ...modalStyle,
          ...DefaultStyle.modal,
          position: "relative",
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          width: modalStyle?.width || 'min(90vw, ' + (modalSize.width || '550px') + ')',
          height: modalStyle?.height || "auto",
          padding: modalStyle?.padding || "40px",
          display: 'flex',
          flexDirection: modalStyle?.flexDirection || "column",
          gap: modalStyle?.gap || "20px",
          minHeight: "200px"
        }}
      >
        <div 
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              width: '100%',
              textAlign: 'center',
              ...titleStyle
            }}
          >
            {title}
          </h2>
          <div
            style={{
              position: "absolute",
              top: "-25px",
              right: "-20px",
              borderRadius: '9999px',
              padding: '4px',
              transition: 'background-color 0.2s'
            }}
            aria-label="Close modal"
          >
            <AlertClose 
              close={onClose}
            />
          </div>
        </div>
        <div
          style={{
            ...DefaultStyle.children,
            ...childrenStyle,
            overflowY: "auto",
            flex: 1
          }}
        >
          {children}
        </div>
        <FooterButton
          onClose={onCancelButton || onClose}
          onConfirm={onConfirm}
          confirmText={confirmText || '선택하기'}
          cancelText={cancelText || '취소하기'}
        />
      </div>
    </div>
  </Portal>
);
};