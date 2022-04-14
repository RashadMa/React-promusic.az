import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let obj = state.cartItems.find((item) => item.id === action.payload.id);
      if (obj === undefined) {
        action.payload.count = 1;
        state.cartItems.push(action.payload);
      } else {
        ++obj.count;
      }
      return {
        ...state,

        // cartItems: [...state.cartItems, action.payload],
      };
    }
    case actionTypes.INCREASE: {
      let obj = state.cartItems.find((item) => item.id === action.payload.id);
      ++obj.count;

      return {
        ...state,
      };
    }
    case actionTypes.DECREASE: {
      let obj = state.cartItems.find((item) => item.id === action.payload.id);
      --obj.count;

      return {
        ...state,
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
}
