import { ModalDispatchTypes, OPEN_MODAL, CLOSE_MODAL } from "../actions/ModalActionTypes";

const modalReducerDefaultState = {
    active: false
}

const modalReducer = (
    state = modalReducerDefaultState,
    action: ModalDispatchTypes
) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                ...action.payload
            };
        case CLOSE_MODAL:
            return modalReducerDefaultState;
        default:
            return state;
    }
}

export default modalReducer;
