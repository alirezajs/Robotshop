import { connect } from "react-redux";
import Product from "../components/Product";
import { isInCart } from "../redux/reducers/cartReducer";
import { addToCart, removeFromCart } from "../redux/actions/cardActions";
import { decreaseStock } from "../redux/actions/productActions";

const mapStateToProps = (state, props) => {
  return {
    isInCart: isInCart(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (name) => dispatch(addToCart(name)),
  removeFromCart: (name) => dispatch(removeFromCart(name)),
  decreaseStock: (name) => dispatch(decreaseStock(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
