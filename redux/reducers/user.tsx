import { User, UserDispatchTypes, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../actions/UserActionTypes";


const userReducerDefaultState:User = {
  firstName: '',
  avatar: '',
  token: '',
  isLoggedIn: false,
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
      case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
      case USER_LOGOUT:
        return userReducerDefaultState

    default:
      return state;
  }
};

export default userReducer;
