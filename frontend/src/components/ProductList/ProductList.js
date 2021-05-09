import React from "react";
import PropTypes from "prop-types";
import Product from "../../containers/Product";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

class ProductList extends React.Component {
  constructor() {
    super();

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending) return false;
    return true;
  }

  render() {
    const { error, products } = this.props;
    if (!this.shouldComponentRender()) return <LoadingSpinner />;
    return (
      <div>
        {error && <span className="product-list-error">{error}</span>}
        <ul className="product-list">
          {products &&
            products.length &&
            products.map((product, index) => (
              <li key={index} className="product-list__item">
                <Product {...product} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  error: PropTypes.bool,
  pending: PropTypes.bool,
  fetchProducts: PropTypes.func.isRequired,
};

export default ProductList;
