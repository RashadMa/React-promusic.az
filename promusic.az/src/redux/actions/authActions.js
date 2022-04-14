import axios from "axios";
import { toast } from "react-toastify";

let url = "https://localhost:5001/admin/api/Accounts";

export const signUp = (user, push) => (dispatch) => {
  axios
    .post(`${url}/register`, user)
    .then(() => {
      dispatch({
        type: "SIGN_UP",
      });
      dispatch({ type: "SIGN_UP" });
      push("/login");
    })
    .catch((error) => {
      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
};

export const signIn = (creds, push) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, creds)
      .then(({ data: { token } }) => {
        localStorage.setItem("token", token);
        dispatch({
          type: "SIGN_IN",
          token: token,
        });
      })
      .then(() => {
        push("/");
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
