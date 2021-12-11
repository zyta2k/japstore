import { combineReducers } from "redux";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const UPDATE_CART = "UPDATE_CART";
const initProductCart = {
  numberCart: 0,
  carts: [], //item trong gio
};

const cartReducer = (state = initProductCart, action) => {
  var number;
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
        numberCart: action.cartAmount,
      };
    case ADD_CART:
      number = state.numberCart + action.quantity;
      localStorage.setItem("cartAmount", number);
      return {
        ...state,
        numberCart: number,
      };
    default:
      return {
        ...state,
      };
  }
};
export default combineReducers({
  cart: cartReducer,
});
