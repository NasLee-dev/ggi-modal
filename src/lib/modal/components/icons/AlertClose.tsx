import React from "react"

export default function AlertClose({ close }: { close: () => void }) {
  return (
    <div 
      className="cursor-pointer"
      onClick={() => {
        close()
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M30 10L10 30" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 10L30 30" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}