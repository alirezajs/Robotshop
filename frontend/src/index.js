import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";

import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import productsData from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(
  rootReducer,
  {
    products: productsData, // initial store values
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
