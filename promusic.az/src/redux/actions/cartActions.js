import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return { type: actionTypes.ADD_TO_CART, payload: cartItem };
}

export function removeFromCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}

export function increase(item) {
  return { type: actionTypes.INCREASE, payload: item };
}

export function decrease(count) {
  return { type: actionTypes.DECREASE, payload: count };
}
