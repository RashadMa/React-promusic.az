import * as actionTypes from "./actionTypes";

// export function changeCategory(category) {
//   return { type: actionTypes.CHANGE_CATEGORY, payload: category };
// }

export const changeCategory = (category) => (dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_CATEGORY,
    payload: category
  })
}

function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORY_SUCCESS, payload: categories };
}

export const getCategories = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Categories?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getCategoriesSuccess(result)));
};