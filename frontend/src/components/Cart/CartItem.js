import React, { Component } from "react";
import { Row, Col, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease() {
    const { stock, onIncrease } = this.props;
    if (this.state.quantity < stock) {
      let quantity = this.state.quantity;
      this.setState({ quantity: ++quantity });
      onIncrease();
    } else {
      alert("we ran out of stock");
    }
  }

  onDecrease() {
    let quantity = this.state.quantity;
    const { onDecrease } = this.props;
    this.setState({ quantity: --quantity });
    onDecrease();
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.quantity === "number") {
      this.setState({
        quantity: nextProps.quantity,
      });
    }
  }
  render() {
    const { name, price, quantity, currency, onClick } = this.props;

    return (
      <Row className="cart-item">
        <Col xs={1}>
          <button className="btn btn-danger btn-xs" onClick={onClick}>
            x
          </button>
        </Col>
        <Col>
          <span className="cart-item__name">{name}</span>
        </Col>
        <Col xs={3}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend onClick={this.onDecrease}>
              <InputGroup.Text>-</InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              className="text-center"
              value={this.state.quantity}
              readOnly
            ></FormControl>
            <InputGroup.Append onClick={this.onIncrease}>
              <InputGroup.Text>+</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col xs={4} className="text-left ml-2">
          {currency} {quantity * parseFloat(price).toFixed(2)}
        </Col>
      </Row>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string,
  stock: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

export default CartItem;
