import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function productListReducerFiltered(
  state = initialState.products,
  action
) {
  switch (action.type) {
    case "GET_PRODUCT_FILTERED":
      return action.payload;
    default:
      return state;
  }
}
