import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import { bindActionCreators } from "redux";

import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "../redux/reducers/productReducer";
import fetchProductsAction from "../fetches/fetchProducts";

const mapStateToProps = (state, props) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
