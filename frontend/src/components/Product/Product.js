import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  render() {
    const { name, price, currency, image, isInCart, material } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={image} alt="product" />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{material}</Card.Text>
          <div className="product__price">
            <h6 class="mb-0 font-weight-semibold">
              {price} {currency}
            </h6>
          </div>
          <Card.Footer className="bg-white text-center">
            <button
              className={isInCart ? "btn btn-danger" : "btn btn-primary"}
              onClick={this.handleClick}
            >
              {isInCart ? "Remove" : "Add to cart"}
            </button>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
