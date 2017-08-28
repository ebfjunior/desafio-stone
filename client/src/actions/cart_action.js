export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export function addCartItem(livro) {
  return {
    type: ADD_CART_ITEM,
    payload: livro
  };
}
export function removeCartItem(livro) {
  return {
    type: REMOVE_CART_ITEM,
    payload: livro
  };
}