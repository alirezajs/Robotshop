// selectors
export const getProducts = (state) => state.products.products;
export const getProduct = (state, props) => {
  return state.products.products.find((item) => item.name === props.name);
};
export const getProductsPending = (state) => state.products.pending;
export const getProductsError = (state) => state.products.error;

export const getStock = (state, props) => {
  const product = state.products.products.find(
    (item) => item.name === props.name
  );
  if (product) {
    return product.stock;
  }
  return null;
};