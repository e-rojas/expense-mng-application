export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER = "USER_REGISTER";
export const USER_UPDATE = "USER_UPDATE";

export type User = {
  firstName: string;
  lastName?: string;
  email?: string;
  password?: string;
  avatar?: string;
  token?: string;
};

export interface USERLOGIN {
  type: typeof USER_LOGIN;
  payload: User;
}

export interface USERREGISTER {
    type: typeof USER_REGISTER;
    payload: User;
}

export type UserDispatchTypes = USERLOGIN | USERREGISTER;
