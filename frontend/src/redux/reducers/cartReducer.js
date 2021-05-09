import { getProduct } from "./productReducer";
import { CART_ADD, CART_REMOVE } from "../actions/cardActions";

const initialState = {
  items: [],
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
      ++state.items[key].quantity;
      check = true;
    }
  });
  if (!check) {
    let _cart = {
      quantity: 1,
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
    };
    state.items.push(_cart);
  }
  return {
    ...state,
    items: [...state.items],
  };
}

function handleCartRemove(state, payload) {
  if (payload.completely || payload.item.quantity <= 1) {
    state.items.splice(payload.index, 1);
  } else {
    --state.items[payload.index].quantity;
  }

  return {
    ...state,
    items: state.items,
  };
}

