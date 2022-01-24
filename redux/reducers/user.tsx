import { User, UserDispatchTypes, USER_REGISTER } from "../actions/UserActionTypes";


const userReducerDefaultState:User = {
  firstName: '',
  avatar: '',
  token: '',
};

const userReducer = (
  state = userReducerDefaultState,
  action: UserDispatchTypes
) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
