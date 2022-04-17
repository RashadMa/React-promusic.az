import axios from "axios";
import Swal from "sweetalert2";
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

export const postComment = (text) => (dispatch) => {
  axios
    .post("https://localhost:5001/member/api/Comments", text)
    .then((response) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your comment successfully posted ",
        showConfirmButton: false,
        timer: 900,
      });
      console.log("response");
      dispatch(postCommentSuccess);
      dispatch(getComments);
    })
    .catch((error) => console.log(error));
};
