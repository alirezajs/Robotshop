import React, { Component } from "react";
import PropTypes from "prop-types";
class CartItem extends Component {
  render() {
    const { name, price, currency, onClick } = this.props;
    console.log(this.props);
    return (
      <div className="cart-item">
        <div>
          <button className="btn btn-danger btn-xs" onClick={onClick}>
            X
          </button>
          <span className="cart-item__name">{name}</span>
        </div>
        <div className="cart-item__price">
          {currency} {price}
        </div>
      </div>
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
