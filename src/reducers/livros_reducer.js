import { FETCH_LIVROS } from "../actions/livros_action";
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LIVROS:
      // return _.mapKeys(action.payload.data, "id");
      return action.payload.data;
  }
  return state;
}