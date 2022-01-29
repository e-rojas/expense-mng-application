import { Dispatch } from "redux";
import { getExpenses, postExpense } from "../../services";

import {
  ExpensesDispatchTypes,
  LOAD_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  Expense,
  EDIT_EXPENSE,
} from "./ExpensesActionsTypes";
import { User } from "./UserActionTypes";

export const getUserExpenses =
  (token: User) => async (dispatch: Dispatch<ExpensesDispatchTypes>) => {
    getExpenses(token)
      .then(({ data }) => {
        console.log("expenses");
        console.log(data);
        dispatch({
          type: LOAD_EXPENSES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  };

  export const  createExpense = (user:User,expense: Expense) => (dispatch: Dispatch<ExpensesDispatchTypes>) => {
    postExpense(user,expense)
    .then(({ data: { expense } }) => {
      dispatch({
        type: ADD_EXPENSE,
        payload: expense,
      });
    }
    )
  }