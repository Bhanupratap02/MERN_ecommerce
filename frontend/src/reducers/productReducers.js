/** @format */

import {
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE__FAIL,
  PRODUCT_DELETE__SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS__FAIL,
  PRODUCT_DETAILS__SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true ,products:[] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true ,...state};
    case PRODUCT_DETAILS__SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS__FAIL:
      return { loading:false, error: action.payload };
    default:
      return state;
  }
};


export const productDeleteReducer = (
  state = { product: { } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true};
    case PRODUCT_DELETE__SUCCESS:
      return { loading: false,success:true };
    case PRODUCT_DELETE__FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};