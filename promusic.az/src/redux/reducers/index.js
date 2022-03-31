import { combineReducers } from "redux";
import changeStateReducer from "./changeStateReducer";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
  changeStateReducer,
  categoryListReducer,
  sliderListReducer,
  productListReducer,
});

export default rootReducer;
