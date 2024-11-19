export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalPosition = "top" | "center" | "bottom";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: ModalSize;
  className?: string;
  position?: ModalPosition;
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
  modalStyle?: React.CSSProperties; 
  contentStyle?: React.CSSProperties; 
  titleStyle?: React.CSSProperties;   
  childrenStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties; 
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}

export interface BaseModalProps extends ModalProps {}

export interface AlertModalProps extends ModalProps {
  description?: string;
}

export interface InfoModalProps extends BaseModalProps {
  description?: string;
  hasButton?: boolean;
}