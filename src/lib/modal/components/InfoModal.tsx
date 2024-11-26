import React from "react"
import { InfoModalProps } from "../types/modal.types"
import { Portal } from "./Portal";
import { X } from "lucide-react";
import { cn } from "../utils/cn";
import { getModalSize } from "../utils/getModalSize";
import AlertClose from "../icons/AlertClose";

export const InfoModal = ({
  size = "lg",
  isOpen,
  onClose,
  children,
  title,
  modalStyle,
  titleStyle,
  childrenStyle,
  overlayStyle,
  description,
  descriptionStyle,
  hasDimmed = false,
}: InfoModalProps) => {
  const modalSize = getModalSize(size);
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
      paddingBottom: "80px",
    },
  }

  if (!isOpen) return null;
  return (
    <Portal>
      <div className="fixed inset-0 z-[100] flex items-center justify-center" style={overlayStyle}>
        <div
          onClick={onClose}
          style={{
            ...defaultStyle.overlay,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: hasDimmed ? "block" : "none",
          }}
        />
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            ...modalStyle,
            ...defaultStyle.modal,
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
            <div className="flex flex-col w-full gap-2">
              <span
                className={cn(
                  "text-xl font-semibold w-full text-left",
                  { "mb-2": description }
                )}
                style={{
                  ...titleStyle,
                }}
              >
                {title}
              </span>
              <span
                className={cn(
                  "w-full text-gray-800 text-md font-normal font-['SUIT'] leading-[18.90px]"
                )}
                style={{
                  ...descriptionStyle,
                }}
              >
                {description}
              </span>
            </div>
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
              ...childrenStyle,
              overflowY: "auto",
              flex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}