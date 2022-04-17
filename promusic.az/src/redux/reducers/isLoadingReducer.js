import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function isLoadingReducer(
  state = initialState.isLoadingDone,
  action
) {
  switch (action.type) {
    case actionTypes.GET_LOADING:
      return action.payload;
    default:
      return state;
  }
}
