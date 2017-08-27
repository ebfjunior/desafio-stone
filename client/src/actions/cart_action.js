import axios from "axios";

export const ADD_CART_ITEM = "ADD_CART_ITEM";

export function addCartItem(livro) {
  console.log(livro);
  return {
    type: ADD_CART_ITEM,
    payload: livro
  };
}