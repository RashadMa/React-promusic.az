import { combineReducers } from "redux";
import changeStateReducer from "./changeStateReducer";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";
import productListReducer from "./productListReducer";
import informationListReducer from "./informationListReducer";

const rootReducer = combineReducers({
  changeStateReducer,
  categoryListReducer,
  sliderListReducer,
  productListReducer,
  informationListReducer,
});

export default rootReducer;
