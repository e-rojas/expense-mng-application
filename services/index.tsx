import axios from "axios";
import { Expense } from "../redux/actions/ExpensesActionsTypes";
import { User } from "../redux/actions/UserActionTypes";

export const register = ({ firstName, lastName, email, password }: User) => {
  return axios.post(`${process.env.API_URL}/users`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = ({ email, password }: User) => {
  return axios.post(`${process.env.API_URL}/auth/login`, {
    email,
    password,
  });
};

export const getExpenses = ({ token }: User) => {
  return axios.get(`${process.env.API_URL}/expenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
    },
  });
};
export const postExpense = ({ token }: User, expense: Expense) => {
  return axios.post(`${process.env.API_URL}/expenses`, expense, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
    },
  });
};

export const removeExpense = ({ token }: User, { id }: Expense) => {
  return axios.delete(`${process.env.API_URL}/expenses/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
      params: `${id}`,
    },
  });
};

export const updateExpense = ({token}: User, expense: Expense) => {
  return axios.patch(`${process.env.API_URL}/expenses`, expense, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
      'params': `${expense.id}`,
    },
    data: expense,
  });
}

export const updateSelectedUser = ({token}: User,data: {firstName:string,avatar:string | null, base64:boolean}) => {
  return axios.patch(`${process.env.API_URL}/users`,data, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`,
    },
    data: data,
  });
}
