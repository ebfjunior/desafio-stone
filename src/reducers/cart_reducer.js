import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart_action";
import _ from 'lodash';

export default function(state = {}, action) {
  let count;
  switch (action.type) {
    case ADD_CART_ITEM:
      count = state[action.payload.id] !== undefined ? state[action.payload.id].count : 0;

      return {...state, [action.payload.id]: {...action.payload, count: ++count}};
    case REMOVE_CART_ITEM:
      count = state[action.payload.id].count;

      if(--count === 0){
        return _.omit(state, action.payload.id);  
      }else{
        return {...state, [action.payload.id]: {...action.payload, count}};
      }
  }
  return state;
}