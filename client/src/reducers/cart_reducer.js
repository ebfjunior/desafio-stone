import { ADD_CART_ITEM } from "../actions/cart_action";
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {...state, [action.payload.id]: action.payload};
  }
  return state;
}