/** @format */

import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW__FAIL,
  PRODUCT_CREATE_REVIEW__RESET,
  PRODUCT_CREATE_REVIEW__SUCCESS,
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
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP__FAIL,
  PRODUCT_TOP__SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE__FAIL,
  PRODUCT_UPDATE__RESET,
  PRODUCT_UPDATE__SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
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
      return { loading: true, ...state };
    case PRODUCT_DETAILS__SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS__FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE__SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE__FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE__SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE__FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE__RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE__SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE__FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE__RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW__SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW__FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW__RESET:
      return {};
    default:
      return state;
  }
};


export const productTopRatedReducer = (state = {products:[]}, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true };
    case PRODUCT_TOP__SUCCESS:
      return { loading: false, products:action.payload };
    case PRODUCT_TOP__FAIL:
      return { loading: false, error: action.payload };
    
    default:
      return state;
  }
};