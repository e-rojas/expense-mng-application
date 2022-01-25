import { Dispatch } from "react";
import { login, register } from "../../services";
import { User, UserDispatchTypes, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "./UserActionTypes";

export const registerUser =
  (user: User) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    register(user)
      .then((response) => {
        console.log("response", response.data);
        dispatch({
          type: USER_REGISTER,
          payload: {
            ...response.data.user,
            isLoggedIn: response.data.success,
          },
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  export const logoutUser = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({
      type: USER_LOGOUT,
    });
  }

  export const loginUser = (user: User) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    login(user)
      .then((response) => {
        console.log("response", response.data);
        dispatch({
          type: USER_LOGIN,
          payload: {
            ...response.data.user,
            isLoggedIn: response.data.success,
          },
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }