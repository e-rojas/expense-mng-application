export const LOAD_EXPENSES = "LOAD_EXPENSES";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";

export type Expense = {
  description: string;
  note: string;
  amount: number;
  createdAt: number;
  id?: string;
};
export interface LOADINGEXPENSES {
  type: typeof LOAD_EXPENSES;
  payload: Expense[];
}

export interface ADDINGEXPENSE {
  type: typeof ADD_EXPENSE;
  payload: Expense;
}

export interface REMOVINGEXPENSE {
  id: string;
  type: typeof REMOVE_EXPENSE;
}

export interface EDITINGEXPENSE {
  updates: Expense;
  id: string;
  type: typeof EDIT_EXPENSE;
}

export type ExpensesDispatchTypes =
  | LOADINGEXPENSES
  | ADDINGEXPENSE
  | REMOVINGEXPENSE
  | EDITINGEXPENSE;
