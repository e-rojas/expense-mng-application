import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import expensesReducer from '../reducers/expenses';
// import filtersReducer from '../reducers/filters';

// import pokemonReducer from '../reducers/pokemon';
import userReducer from '../reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
//   pokemon: pokemonReducer,
//   expenses: expensesReducer,
//   filters: filtersReducer,
  user: userReducer,
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