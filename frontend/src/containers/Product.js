import { connect } from "react-redux";
import Product from "../components/Product";
import { addToCart} from "../redux/actions/cardActions";
import { decreaseStock } from "../redux/actions/productActions";
import { getStock } from "../redux/selectors/productSelectors";

const mapStateToProps = (state, props) => {
  return {
    getStock: getStock(state, props),
  };
};

function addCardCombineDispatch(product) {
  return dispatch => {
      dispatch(addToCart(product))
      dispatch(decreaseStock(product))
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addCardCombineDispatch(product))

});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
