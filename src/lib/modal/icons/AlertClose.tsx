import React from "react"

export default function AlertClose({ close, isAlert }: { close: () => void, isAlert?: boolean }) {
  return (
    <div 
      className="cursor-pointer"
      onClick={() => {
        close()
      }}
    >
      {
        isAlert ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M30 10L10 30" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10L30 30" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) :
        (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 15L15 23" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15L23 23" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        )
      }
    </div>
  )
}