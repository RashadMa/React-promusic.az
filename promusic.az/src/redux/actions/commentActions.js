import axios from "axios";
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

const postCommentSuccess = () => ({
  type: actionTypes.POST_COMMENT_SUCCESS,
});

export const postComment = (comment) => (dispatch) => {
  axios
    .post("https://localhost:5001/member/api/Comments")
    .then((response) => {
      console.log("response");
      dispatch(postCommentSuccess);
      dispatch(getComments);
    })
    .catch((error) => console.log(error));
};
