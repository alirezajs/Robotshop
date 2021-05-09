import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { items, total, currency, removeFromCart, addToCart } = this.props;

    return (
      <div>
        <h3>Shopping Cart</h3>

        <div className="cart">
          <div className="panel panel-default">
            <div className="panel-body">
              {items.length > 0 && (
                <div className="cart__body">
                  {items.map((item, index) => (
                    <CartItem
                      key={index + item.name}
                      {...item}
                      currency={currency}
                      onClick={() => {
                        removeFromCart({ index, item, completely: true });
                      }}
                      onIncrease={() => {
                        addToCart({
                          name: item.name,
                          price: item.price,
                          stock: item.stock,
                        });
                      }}
                      onDecrease={() => removeFromCart({ index, item })}
                    />
                  ))}
                </div>
              )}
              {items.length === 0 && (
                <div className="alert alert-info">Cart is empty</div>
              )}
              <div className="cart__total">
                Total: {currency} {total}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Cart;
