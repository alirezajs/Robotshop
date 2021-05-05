import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Moment from "moment";

class Product extends Component {
  handleClick = () => {
    const { name, price, stock, addToCart, decreaseStock } = this.props;
    if (stock > 0) {
      addToCart({ name, price, stock });
      decreaseStock({ name});
    } else {
      alert("there is no stock");
    }
  };

  render() {
    Moment.locale("en");
    const { name, price, image, material, stock, createdAt } = this.props;
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
            {stock}
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
              disabled={stock === 0}
              className={stock ? "btn btn-danger" : "btn btn-primary"}
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
  price: PropTypes.string,
  image: PropTypes.string,
  material: PropTypes.string,
};

export default Product;
