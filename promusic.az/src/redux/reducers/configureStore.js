import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

const initialStore = {
  cartReducer: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  },
};

export default function configureStore() {
  return createStore(rootReducer, initialStore, applyMiddleware(thunk));
}
