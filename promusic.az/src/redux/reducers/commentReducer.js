import * as actionTypes from "../actions/actionTypes";

const initialState = {
  comments: [],
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COMMENTS_SUCCESS:
      return action.payload;
    case actionTypes.POST_COMMENT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
