import { Dispatch } from "react";
import { login, register, updateSelectedUser } from "../../services";
import { SUBMIT, SubmitDispatchTypes } from "./SubmissionActionsTypes";
import {
  User,
  UserDispatchTypes,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  ALERT,
  USER_UPDATE,
} from "./UserActionTypes";

export const registerUser =
  (user: User) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    register(user)
      .then((response) => {
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
export const updateUser =
  (
    user: User,
    data: { firstName: string; avatar: string | null; base64: boolean }
  ) =>
  async (dispatch: Dispatch<UserDispatchTypes | SubmitDispatchTypes>) => {
    dispatch({
      type: SUBMIT,
      payload: {
        sending: true,
      },
    });
    updateSelectedUser(user, data)
      .then((response) => {
        const { avatar, firstName } = response.data;
        dispatch({
          type: USER_UPDATE,
          payload: {
            ...user,
            avatar,
            firstName,
          },
        });
        setTimeout(() => {
          dispatch({
            type: SUBMIT,
            payload: {
              error: false,
              errorMessage: "",
              sending: false,
            },
          });
        }, 1000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
