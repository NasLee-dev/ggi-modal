import React from "react";

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <div
      className={`relative z-[101] ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};