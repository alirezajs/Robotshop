export const CART_ADD = "cart/ADD";
export const CART_REMOVE = "cart/REMOVE";

// action creators
export const addToCart = (product) => {
  return {
    type: CART_ADD,
    payload: {
      ...product,
    },
  };
};

export const removeFromCart = (productName) => ({
  type: CART_REMOVE,
  payload: productName,
});
