import { SUBMIT, Submit, SubmitDispatchTypes } from "../actions/SubmissionActionsTypes";

const submitReducerDefaultState: Submit = {
  sending: false,
  sendingMessage: "",
  success: false,
  successMessage: "",
  error: false,
  errorMessage: "",
};

const submitReducer = (
  state = submitReducerDefaultState,
  action: SubmitDispatchTypes
) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default submitReducer;
