import React, { useEffect } from "react";
import { ConfirmModalProps } from "../types/modal.types";
import { Portal } from "./Portal";
import { getModalSize } from "../utils/getModalSize";

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  confirmText,
  cancelText,
  onClose,
  onConfirm,
  children,
  modalStyle,
  contentStyle,
  overlayStyle,
  size = "md",
  closeOnEsc = true,
  position = "center",
  overlayClassName,
  animation,
  duration = 200,
  ariaLabel,
  ariaDescribedby,
  buttonPosition = "center",
  ...props
}) => {
  const sizeStyle = getModalSize(size);

  useEffect(() => {
    if (closeOnEsc) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [closeOnEsc, onClose]);

  const getPositionStyle = () => {
    const styles = {
      top: { alignItems: 'flex-start' },
      bottom: { alignItems: 'flex-end' },
      center: { alignItems: 'center' }
    };
    return styles[position] || styles.center;
  };

  const getButtonPositionStyle = () => {
    const styles = {
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      center: { justifyContent: 'center' }
    };
    return styles[buttonPosition] || styles.center;
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: `all ${duration}ms`,
          ...getPositionStyle(),
          ...overlayStyle
        }}
        onClick={onClose}
        role="dialog"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            width: modalStyle?.width || 'min(90vw, ' + (sizeStyle.width || '550px') + ')',
            height: modalStyle?.height || "auto",
            padding: modalStyle?.padding || "40px",
            gap: modalStyle?.gap || "40px",
            minHeight: "200px",
            transition: `all ${duration}ms`,
            ...modalStyle
          }}
        >
          <div style={contentStyle}>
            {children}
          </div>

          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              ...getButtonPositionStyle()
            }}
          >
            <button
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '35%',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <span
                style={{
                  color: '#4b5563',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.025em'
                }}
              >
                {cancelText || '취소'}
              </span>
            </button>
            <button
              onClick={onConfirm}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '65%',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#2563eb',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              <span
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.025em'
                }}
              >
                {confirmText || '확인'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};