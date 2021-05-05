import { connect } from "react-redux";
import Product from "../components/Product";
import { addToCart, removeFromCart, isInCart } from "../redux/reducers/cart";
const mapStateToProps = (state, props) => {
  return {
    isInCart: isInCart(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (name) => dispatch(addToCart(name)),
  removeFromCart: (name) => dispatch(removeFromCart(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
