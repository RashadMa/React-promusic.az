import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

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
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    case "SIGN_IN":
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        userName: null,
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
