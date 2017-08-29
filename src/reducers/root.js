import { combineReducers } from 'redux';
import LivrosReducer from './livros_reducer'
import CartReducer from './cart_reducer'

const rootReducer = combineReducers({
  livros: LivrosReducer,
  cart: CartReducer,
});

export default rootReducer;
