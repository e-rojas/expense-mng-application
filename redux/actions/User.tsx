import { Dispatch } from "react";
import { login, register } from "../../services";
import { SUBMIT, SubmitDispatchTypes } from "./SubmissionActionsTypes";
import {
  User,
  UserDispatchTypes,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  ALERT,
} from "./UserActionTypes";

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

export const logoutUser =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({
      type: USER_LOGOUT,
    });
  };

export const loginUser =
  (user: User) =>
  async (dispatch: Dispatch<UserDispatchTypes | SubmitDispatchTypes>) => {
    dispatch({
      type: SUBMIT,
      payload: {
        sending: true,
      },
    });
    login(user)
      .then((response) => {
        console.log("response", response.data);
        setTimeout(() => {
          dispatch({
            type: SUBMIT,
            payload: {
              sending: false,
            },
          });
          dispatch({
            type: USER_LOGIN,
            payload: {
              ...response.data.user,
              isLoggedIn: response.data.success,
            },
          });
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: SUBMIT,
          payload: {
            sending: false,
            error: true,
            errorMessage: "Invalid email or password",
          },
        });
        setTimeout(() => {
          dispatch({
            type: SUBMIT,
            payload: {
              error: false,
              errorMessage: "",
            },
          });
        }, 1000);
      });
  };
