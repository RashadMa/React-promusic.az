import * as actionTypes from "./actionTypes";

function getCommentsSuccess(comments) {
  return { type: actionTypes.GET_COMMENTS_SUCCESS, payload: comments };
}

export const getComments = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Comments?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getCommentsSuccess(result)));
};
