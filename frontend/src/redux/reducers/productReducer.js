import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../actions/productActions";

const initialState = {
  products: [], //productsData, // initial store values,
  pending: false,
  error: null,
};

// reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload.products,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error.error,
        products: [],
      };
    default:
      return state;
  }
}

// selectors
export const getProducts = (state) => state.products.products;
export const getProduct = (state, props) =>
  state.products.products.find((item) => item.name === props.name);
export const getProductsPending = (state) => state.products.pending;
export const getProductsError = (state) => state.products.error;
