/** @format */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer, userUpdateReducer } from "./reducers/userReducers";
import { orderCreatereducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderPayReducer } from "./reducers/orderReducers";




const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin:userLoginReducer,
  userRegister: userRegisterReducer ,
  userDetails:userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer,
  orderCreate:orderCreatereducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer,
  orderListMy:orderListMyReducer,
  userList: userListReducer,
  userDelete:userDetailsReducer,
  userUpdate:userUpdateReducer,
  productDelete:productDeleteReducer,
  productCreate:productCreateReducer,
  productUpdate:productUpdateReducer,
  orderList:orderListReducer,
  orderDeliver:orderDeliverReducer,
  productReviewCrete:productReviewCreateReducer,
  productTopRated:productTopRatedReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

     const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
       ? JSON.parse(localStorage.getItem("shippingAddress"))
       : {};
      const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
        ? JSON.parse(localStorage.getItem("paymentMethod"))
        : null;
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod:paymentMethodFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
