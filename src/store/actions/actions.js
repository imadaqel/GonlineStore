import { ADD_TO_CART, Remove_From_CART } from "./types";

export function addToCart(productInfo, quantity) {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity,
  };
}

export function removeFromCart(index) {
  return {
    type: Remove_From_CART,
    index,
  };
}
