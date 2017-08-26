import { FETCH_LIVROS } from "../actions/livros_action";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LIVROS:
      return action.payload.data;
  }
  return state;
}