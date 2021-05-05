import React, { Component } from "react";
import { Row, Col, FormControl, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
class CartItem extends Component {
  render() {
    const { name, price, quantity, currency, onClick } = this.props;
    return (
      <Row className="cart-item">
        <Col xs={1}>
          <button className="btn btn-danger btn-xs" onClick={onClick}>
            X
          </button>
        </Col>
        <Col>
          <span className="cart-item__name">{name}</span>
        </Col>
        <Col xs={3}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>-</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="text-center"
              value="{quantity}"
            ></FormControl>
            <InputGroup.Append>
              <InputGroup.Text class="input-group-text">+</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col xs={3} className="cart-item__price ml-2">
          price: {currency} {quantity * price}
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
