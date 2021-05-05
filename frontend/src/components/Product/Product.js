import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Moment from "moment";

class Product extends Component {
  handleClick = () => {
    const { name, addToCart, removeFromCart, isInCart } = this.props;

    if (isInCart) {
      removeFromCart(name);
    } else {
      addToCart(name);
    }
  };

  render() {
    Moment.locale("en");
    const {
      name,
      price,
      image,
      material,
      isInCart,
      stock,
      createdAt,
    } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={image} alt="product" />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h6>
              <strong> Material: </strong>
              {material}
            </h6>
            <div>
              <strong>Stock: </strong>
              {stock}
            </div>
            <span>
              <strong>Create Date:</strong>
              {Moment(createdAt).format("DD-MM-YYYY")}
            </span>
          </Card.Text>
          <div className="product__price">
            <h6 className="mb-0 font-weight-semibold">฿{price} </h6>
          </div>
          <Card.Footer className="bg-white text-center">
            <button
              disabled={ stock === 0}
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
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  image: PropTypes.string,
  material: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
