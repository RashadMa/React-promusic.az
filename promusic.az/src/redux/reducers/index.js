import { combineReducers } from "redux";
import changeStateReducer from "./changeStateReducer";
import categoryListReducer from "./categoryListReducer";

const rootReducer = combineReducers({
  changeStateReducer,
  categoryListReducer,
});

export default rootReducer;
