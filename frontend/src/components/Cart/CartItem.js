import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
class CartItem extends Component {

  render() {
    const { name, price, currency, onClick } = this.props;
    return (
      <Row className="cart-item">
        <Col xs={2}>
          <button className="btn btn-danger btn-xs" onClick={onClick}>
            X
          </button>
        </Col>
        <Col>
          <span className="cart-item__name">{name}</span>
        </Col>
        <Col xs={4} className="text-left ml-2">
          {currency} {price}
        </Col>
      </Row>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
