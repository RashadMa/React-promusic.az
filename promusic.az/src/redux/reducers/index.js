import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import sliderListReducer from "./sliderListReducer";
import productListReducer from "./productListReducer";
import informationListReducer from "./informationListReducer";
import brandListReducer from "./brandListReducer";
import settingListReducer from "./settingListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import subCategoryListReducer from "./subCategoryListReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import commentReducer from "./commentReducer";
import isLoadingReducer from "./isLoadingReducer";
import productListReducerFiltered from "./productListReducerFiltered";

const rootReducer = combineReducers({
  categoryListReducer,
  sliderListReducer,
  productListReducer,
  informationListReducer,
  brandListReducer,
  settingListReducer,
  changeCategoryReducer,
  subCategoryListReducer,
  authReducer,
  cartReducer,
  commentReducer,
  isLoadingReducer,
  productListReducerFiltered
});

export default rootReducer;
