import { Dispatch } from "redux";
import { getExpenses } from "../../services";

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
