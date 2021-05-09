
// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.name) !== -1;
  }
  
  export function getItems(state, props) {
    return state.cart.items;
  }
  
  export function getCurrency(state, props) {
    return state.cart.currency;
  }
  
  export function getTotal(state, props) {
    return state.cart.items.reduce((acc, product) => {
      var result =
        parseFloat(acc) + (product.quantity | 1) * parseFloat(+product.price);
      return +result.toFixed(2);
    }, 0);
  }