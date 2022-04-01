import { combineReducers } from "redux";
import changeStateReducer from "./changeStateReducer";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";
import productListReducer from "./productListReducer";
import informationListReducer from "./informationListReducer";
import brandListReducer from "./brandListReducer";

const rootReducer = combineReducers({
  changeStateReducer,
  categoryListReducer,
  sliderListReducer,
  productListReducer,
  informationListReducer,
  brandListReducer,
});

export default rootReducer;
