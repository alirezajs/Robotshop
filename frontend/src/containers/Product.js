import { connect } from "react-redux";
import Product from "../components/Product";
import { isInCart } from "../redux/reducers/cartReducer";
import { addToCart, removeFromCart } from "../redux/actions/cardActions";
import { decreaseStock } from "../redux/actions/productActions";
import { getStock } from "../redux/reducers/productReducer";

const mapStateToProps = (state, props) => {
  return {
    isInCart: isInCart(state, props),
    getStock: getStock(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (name) => dispatch(addToCart(name)),
  removeFromCart: (name) => dispatch(removeFromCart(name)),
  decreaseStock: (name) => dispatch(decreaseStock(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
