export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalPosition = "top" | "center" | "bottom";

export type ButtonPosition = "start" | "end" | "center";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
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
  buttonPosition?: ButtonPosition;
  modalStyle?: React.CSSProperties; 
  contentStyle?: React.CSSProperties; 
  titleStyle?: React.CSSProperties;
  childrenStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties; 
}

export interface BaseModalProps extends ModalProps {}

export interface AlertModalProps extends Omit<BaseModalProps, "confirmText" | "onConfirm" | "cancelText"> {
  description?: string;
}

export interface InfoModalProps extends Omit<BaseModalProps, "confirmText" | "onConfirm" | "cancelText"> {
  hasDimmed?: boolean;
  description?: string;
  descriptionStyle?: React.CSSProperties;
  refName?: React.RefObject<HTMLDivElement>;
}

export interface ConfirmModalProps extends Omit<BaseModalProps, "title" | "description" | "titleStyle"> {}