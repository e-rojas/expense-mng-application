import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/Expenses';
import modalReducer from '../reducers/Modal';
import submitReducer from '../reducers/Submission';
import userReducer from '../reducers/User';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
  expenses: expensesReducer,
  user: userReducer,
  modal: modalReducer,
  submit: submitReducer
});

const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );
  
  export type RootStore = ReturnType<typeof RootReducer>;
  
  export default Store;
  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }