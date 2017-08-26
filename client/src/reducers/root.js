import { combineReducers } from 'redux';
import LivrosReducer from './livros_reducer'

const rootReducer = combineReducers({
  livros: LivrosReducer
});

export default rootReducer;
