import axios from "axios";
import Swal from "sweetalert2";

let url = "https://localhost:5001/member/api/Accounts";

export const signUp = (user, push) => (dispatch) => {
  axios
    .post(`${url}/register`, user)
    .then(() => {
      // dispatch({
      //   type: "SIGN_UP",
      // });
      dispatch({ type: "SIGN_UP" });
      push("/login");
    })
    .catch((error) => {
      console.log(error);
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
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Ooops....",
          text: "Email or password is incorrect",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};
