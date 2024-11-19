import { MODAL_SIZES } from "../constants/size";
import { ModalSize } from "../types/modal.types";

export const getModalSize = (size: ModalSize = 'md') => MODAL_SIZES[size];