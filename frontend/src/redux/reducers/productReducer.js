import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  DECREASE_STOCK,
  INCREASE_STOCK,
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

    case DECREASE_STOCK:
      return handleDecreaseStock(state, action.payload);
    case INCREASE_STOCK: {
      return handleIncreaseStock(state, action.payload);
    }
    default:
      return state;
  }
}

function handleDecreaseStock(state, payload) {
  state.products.map((item, key) => {
    if (item.name === payload.name) {
      state.products[key].stock--;
    }
  });
  return {
    ...state,
    products: state.products,
  };
}

function handleIncreaseStock(state, payload) {
  state.products.map((item, key) => {
    if (item.name === payload.item.name) {
      if (payload.completely) {
        state.products[key].stock = payload.item.stock;
      } else {
        state.products[key].stock++;
      }
    }
  });
  return {
    ...state,
    products: state.products,
  };
}


