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
