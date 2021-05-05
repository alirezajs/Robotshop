export const FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const DECREASE_STOCK = "DECREASE_STUCK";
export const INCREASE_STOCK = "INCREASE_STUCK";

export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: { error },
});

export const decreaseStock = (product) => ({
  type: DECREASE_STOCK,
  payload: {
    ...product,
  },
});

export const increaseStock = (product) => ({
  type: INCREASE_STOCK,
  payload: {
    ...product,
  },
});

