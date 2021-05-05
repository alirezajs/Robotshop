import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "../redux/actions/productActions";

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch("http://localhost:8000/api/robots")
      .then(handelError)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}
function handelError(response) {
  if (!response.ok) {
    throw Error(Response.statusText);
  }
  return response;
}

export default fetchProducts;
