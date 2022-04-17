/** @format */

import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE__FAIL,
  PRODUCT_CREATE__RESET,
  PRODUCT_CREATE__SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE__FAIL,
  PRODUCT_DELETE__SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS__FAIL,
  PRODUCT_DETAILS__SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE__FAIL,
  PRODUCT_UPDATE__RESET,
  PRODUCT_UPDATE__SUCCESS,
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

export const productCreateReducer = (state = {} , action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE__SUCCESS:
      return { loading: false, success: true , product:action.payload};
    case PRODUCT_CREATE__FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE__RESET:
      return { };
    default:
      return state;
  }
};

export const productUpdateReducer = (state = {product:{}}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE__SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE__FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE__RESET:
      return {product:{}};
    default:
      return state;
  }
};