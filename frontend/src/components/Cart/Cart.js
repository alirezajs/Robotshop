import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ items, total, currency, removeFromCart, increaseStock }) => {
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
                      removeFromCart(index);
                      increaseStock(item);
                    }}
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
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
