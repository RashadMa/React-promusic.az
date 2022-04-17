import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  userName: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return Swal.fire({
        position: "top-end",
        icon: "success",
        title: " Welcome ....",
        showConfirmButton: false,
        timer: 900,
      });

    case "SIGN_IN":
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are signed in",
        showConfirmButton: false,
        timer: 900,
      });

      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        userName: user.userName,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Goodbye...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
