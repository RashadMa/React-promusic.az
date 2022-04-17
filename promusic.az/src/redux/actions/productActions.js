import * as actionTypes from "./actionTypes";

export function getProductsSuccess(slider) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: slider };
}

export const getProducts = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Products?page=1";

  dispatch({
    type: actionTypes.GET_LOADING,
    payload:  {isLoadingDone: false}
  })
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // setLoader(false)
      dispatch({
        type: actionTypes.GET_LOADING,
        payload: {isLoadingDone: true}
      })
      dispatch(getProductsSuccess(result))
    });
};