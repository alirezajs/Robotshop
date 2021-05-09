import { connect } from "react-redux";
import Cart from "../components/Cart";
import {
  getItems,
  getCurrency,
  getTotal,
} from "../redux/selectors/cardSelectors";
import { addToCart, removeFromCart } from "../redux/actions/cardActions";
import { increaseStock, decreaseStock } from "../redux/actions/productActions";

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state, props),
    currency: getCurrency(state, props),
    total: getTotal(state, props),
  };
};

function addCardCombineDispatch(product) {
  return (dispatch) => {
    dispatch(addToCart(product));
    dispatch(decreaseStock(product));
  };
}

function removeCardCombineDispatch(product) {
  return (dispatch) => {
    dispatch(removeFromCart(product));
    dispatch(increaseStock(product));
  };
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(removeCardCombineDispatch(product)),
  addToCart: (product) => dispatch(addCardCombineDispatch(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
