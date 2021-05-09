export const CART_ADD = "cart/ADD";
export const CART_REMOVE = "cart/REMOVE";


// action creators
export function addToCart(product) {
  return {
    type: CART_ADD,
    payload: {
      ...product,
    },
  };
}

export function removeFromCart(product) {
  return {
    type: CART_REMOVE,
    payload: {
      ...product,
    },
  };
}
