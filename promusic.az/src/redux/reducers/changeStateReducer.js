import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeStateReducer(
  state = initialState.currentState,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_STATE:
      return action.payload;
    default:
      return state;
  }
}
