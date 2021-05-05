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
  let check = false;
  state.items.map((item, key) => {
    if (item.name === payload.name) {
      state.items[key].quantity++;
      check = true;
    }
  });
  if (!check) {
    let _cart = {
      quantity: 1,
      name: payload.name,
      price: payload.price,
    };
    state.items.push(_cart);
  }
  return {
    ...state,
    items: [...state.items],
  };
}

function handleCartRemove(state, payload) {
  return {
    ...state,
    items: state.items.filter((id) => id !== payload.productId),
  };
}

// action creators
export function addToCart(productId) {
  return {
    type: CART_ADD,
    payload: {
      productId,
    },
  };
}

export function removeFromCart(productId) {
  return {
    type: CART_REMOVE,
    payload: {
      productId,
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
    return acc + +item.price;
  }, 0);
}
