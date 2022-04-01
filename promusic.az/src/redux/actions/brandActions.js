import * as actionTypes from "./actionTypes";

export function getBrandsSuccess(brand) {
  return { type: actionTypes.GET_BRAND_SUCCESS, payload: brand };
}

export const getBrands = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Brands?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getBrandsSuccess(result)));
};