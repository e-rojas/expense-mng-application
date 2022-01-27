export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ACTIVATE_MODAL = "ACTIVATE_MODAL";

export type Modal = {
    active: boolean;
}

export interface OPENNINGMODAL {
    type: typeof OPEN_MODAL;
    payload: Modal;
}

export interface CLOSINGMODAL {
    type: typeof CLOSE_MODAL;
}


export type ModalDispatchTypes = OPENNINGMODAL | CLOSINGMODAL;