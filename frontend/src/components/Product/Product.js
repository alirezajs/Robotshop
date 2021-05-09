import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Moment from "moment";

class Product extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { name, price, stock, addToCart } = this.props;
    if (stock > 0) {
      addToCart({ name, price, stock });
    } else {
      alert("there is no stock");
    }
  };

  render() {
    Moment.locale("en");
    const { name, price, image, material, createdAt, getStock } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={image} alt="product" />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6>
            <strong> Material: </strong>
            {material}
          </h6>
          <div>
            <strong>Stock: </strong>
            {getStock}
          </div>
          <div>
            <strong>Create Date:</strong>
            {Moment(createdAt).format("DD-MM-YYYY")}
          </div>
          <div className="product__price">
            <h6 className="mb-0 font-weight-semibold">฿{price} </h6>
          </div>
          <Card.Footer className="bg-white text-center">
            <button
              disabled={getStock === 0}
              className="btn btn-success"
              onClick={this.handleClick}
            >
              Add to cart
            </button>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  material: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
  getStock: PropTypes.number.isRequired,
};

export default Product;
