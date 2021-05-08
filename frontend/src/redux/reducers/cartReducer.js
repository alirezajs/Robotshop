import { getProduct } from "./productReducer";

// actions
const CART_ADD = "cart/ADD";
const CART_REMOVE = "cart/REMOVE";

// reducer
const initialState = {
  items: [], // array of product ids
  currency: "฿",
  numberCart: 0,
};

export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CART_ADD:
      return handleCartAdd(state, action.payload);
    case CART_REMOVE:
      return handleCartRemove(state, action.payload);
    default:
      return state;
  }
}

function handleCartAdd(state, payload) {
  let _cart = {
    name: payload.name,
    price: payload.price,
  };
  state.items.push(_cart);
  return {
    ...state,
    items: state.items,
  };
}

function handleCartRemove(state, payload) {
  state.items.splice(payload, 1);
  return {
    ...state,
    items: state.items,
  };
}

// action creators
export function addToCart(productName) {
  return {
    type: CART_ADD,
    payload: {
      productName,
    },
  };
}

export function removeFromCart(productName) {
  return {
    type: CART_REMOVE,
    payload: {
      productName,
    },
  };
}

// selectors
export function isInCart(state, props) {
  return state.cart.items.indexOf(props.name) !== -1;
}

export function getItems(state, props) {
  return state.cart.items;
}

export function getCurrency(state, props) {
  return state.cart.currency;
}

export function getTotal(state, props) {
  return state.cart.items.reduce((acc, product) => {
    const item = getProduct(state, product);
    var result = parseFloat(acc) + parseFloat(+item.price);
    return +result.toFixed(2);
  }, 0);
}
