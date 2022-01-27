import { Dispatch } from "react";
import {
    OPEN_MODAL,
    CLOSE_MODAL,
    ModalDispatchTypes,
} from "../actions/ModalActionTypes";

export const openModal =
    (active:boolean) => async (dispatch: Dispatch<ModalDispatchTypes>) => {
        dispatch({
            type: OPEN_MODAL,
            payload: {
                active: active,
            },
        });
    }
    
export const closeModal =
    () => async (dispatch: Dispatch<ModalDispatchTypes>) => {
        dispatch({
            type: CLOSE_MODAL,
        });
    }
    
