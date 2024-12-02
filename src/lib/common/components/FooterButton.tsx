import React from "react"

interface FooterButtonProps {
  onClose: () => void
  onConfirm: () => void
  confirmText?: string
  cancelText?: string
}

export const FooterButton = ({ onClose, onConfirm, confirmText, cancelText }: FooterButtonProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        width: '100%',
        borderTop: '1px solid #e5e7eb',
        marginTop: 'auto',
      }}
    >
      <button
        onClick={onClose}
        style={{
          flex: 1,
          padding: '12px',
          backgroundColor: '#F3F4F6',
          borderRight: '1px solid #e5e7eb',
          fontWeight: 500,
          transition: 'background-color 0.2s',
          borderBottomLeftRadius: '7px',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
      >
        <span 
          style={{
            fontFamily: "NanumGothic",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "135%",
            letterSpacing: "-0.32px",
          }}
        >
          {cancelText}
        </span>
      </button>
      <button
        onClick={() => {
          onConfirm()
        }}
        style={{
          flex: 1,
          padding: '12px',
          backgroundColor: '#2563EB',
          color: 'white',
          transition: 'background-color 0.2s',
          borderBottomRightRadius: '16px',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
      >
        <span 
          style={{
            fontFamily: "NanumGothic",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "135%",
            letterSpacing: "-0.32px",
            color: 'white',
          }}
        >
          {confirmText}
        </span>
      </button>
    </div>
  )
}