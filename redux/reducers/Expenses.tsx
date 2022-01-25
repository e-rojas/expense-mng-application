import {
  Expense,
  ExpensesDispatchTypes,
  LOAD_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from "../actions/ExpensesActionsTypes";

const expensesREduerDefaultState: Expense[] = [];

const expensesReducer = (
  state = expensesREduerDefaultState,
  action: ExpensesDispatchTypes
) => {
  switch (action.type) {
    case LOAD_EXPENSES:
      return [...state, ...action.payload];
    case ADD_EXPENSE:
      return [...state, action.payload];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
