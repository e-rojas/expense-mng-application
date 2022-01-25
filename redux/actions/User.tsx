import { Dispatch } from "react";
import { register } from "../../services";
import { User, UserDispatchTypes, USER_REGISTER } from "./UserActionTypes";

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
