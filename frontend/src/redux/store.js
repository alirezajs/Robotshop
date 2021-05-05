import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer, productReducer } from "./reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
