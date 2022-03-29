import * as actionTypes from "./actionTypes";

export function changeState(state) {
  return { type: actionTypes.CHANGE_STATE, patload: state };
}
