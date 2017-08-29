export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export function addCartItem(livro) {
  Materialize.toast('Livro adicionado com sucesso', 3000);
  return {
    type: ADD_CART_ITEM,
    payload: livro
  };
}
export function removeCartItem(livro) {
  Materialize.toast('Livro removido com sucesso', 3000);
  return {
    type: REMOVE_CART_ITEM,
    payload: livro
  };
}