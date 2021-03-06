import { Dispatch } from "redux";
import {
  getExpenses,
  postExpense,
  removeExpense,
  updateExpense,
} from "../../services";

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
        dispatch({
          type: LOAD_EXPENSES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  };

export const createExpense =
  (user: User, expense: Expense) =>
  (dispatch: Dispatch<ExpensesDispatchTypes>) => {
    postExpense(user, expense).then(({ data: { expense } }) => {
      dispatch({
        type: ADD_EXPENSE,
        payload: expense,
      });
    });
  };

export const deleteExpense =
  (user: User, expense: Expense) =>
  async (dispatch: Dispatch<ExpensesDispatchTypes>) => {
    removeExpense(user, expense)
      .then(
        ({
          data: {
            success,
            doc: { id },
          },
        }) => {
          if (success) {
            dispatch({
              type: REMOVE_EXPENSE,
              id,
            });
          }
        }
      )
      .catch((e) => console.log(e));
  };

export const editExpense =
  (user: User, expense: Expense) =>
  (dispatch: Dispatch<ExpensesDispatchTypes>) => {
    updateExpense(user, expense)
      .then(({ data: { success, expense } }) => {
        if (success) {
          dispatch({
            type: EDIT_EXPENSE,
            id: expense.id,
            updates: expense,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch({
    //   type: EDIT_EXPENSE,
    //   id: expense.id,
    //   updates: expense,
    // });
  };
