import React from "react";
import AlertClose from "../icons/AlertClose";
import { AlertModalProps } from "../types/modal.types";
import { Portal } from "./Portal";
import { getModalSize } from "../utils/getModalSize";

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  modalStyle,
  contentStyle,
  titleStyle,
  childrenStyle,
  overlayStyle,
  size,
  position = "center",
  ...props
}) => {
  const modalSize = getModalSize(size);

  // 기본 스타일과 props로 받은 스타일을 병합
  const finalModalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '24px',
    position: 'relative' as 'relative',
    width: modalStyle?.width || modalSize.width || '480px',
    height: modalStyle?.height || '240px',
    ...(modalStyle || {})  // 나머지 modalStyle 속성들
  };

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
        <div style={finalModalStyle}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              padding: '20px',
              position: 'absolute',
              right: 0,
              top: 0
            }}
          >
            <AlertClose close={onClose} isAlert={true} />
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              ...contentStyle
            }}
          >
            <p
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  fontFamily: 'SUIT',
                  lineHeight: '31px',
                  ...titleStyle
                }}
              >
                {title}
              </span>
              <span
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  fontFamily: 'SUIT',
                  lineHeight: '31px',
                  ...childrenStyle
                }}
              >
                {children}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Portal>
  );
};