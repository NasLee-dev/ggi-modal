export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalPosition = "top" | "center" | "bottom";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  position?: ModalPosition;
  size?: ModalSize;
  title?: string;
  description?: string;
  overlayClassName?: string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  preventScroll?: boolean;
  showCloseButton?: boolean;
  animation?: "fade" | "slide" | "scale" | "none";
  duration?: number;
  ariaLabel?: string;
  ariaDescribedby?: string;
  buttonPosition?: "start" | "end" | "center";
  isAlert?: boolean;
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  modalStyle?: React.CSSProperties; 
  contentStyle?: React.CSSProperties; 
  titleStyle?: React.CSSProperties;   
  childrenStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties; 
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}

export interface AlertModalProps extends BaseModalProps {
  description?: string;
}

export interface InfoModalProps extends BaseModalProps {
  description?: string;
  hasButton?: boolean;
}