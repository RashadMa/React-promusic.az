import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function productListReducer(
  state = initialState.products,
  action
) {
  switch (action.type) {
    case "GET_PRODUCT_FILTERED":
      return action.payload;
    case actionTypes.GET_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
