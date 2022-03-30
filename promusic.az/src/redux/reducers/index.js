import { combineReducers } from "redux";
import changeStateReducer from "./changeStateReducer";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";

const rootReducer = combineReducers({
  changeStateReducer,
  categoryListReducer,
  sliderListReducer,
});

export default rootReducer;
