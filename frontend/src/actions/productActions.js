/** @format */

import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE__FAIL,
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
  PRODUCT_UPDATE__SUCCESS,
} from "../constants/productConstants";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS__SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS__FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
     await axios.delete(`/api/products/${id}`, config);
    dispatch({
      type: PRODUCT_DELETE__SUCCESS,
      
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE__FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
   const {data} =  await axios.post(`/api/products`,{}, config);
    dispatch({
      type: PRODUCT_CREATE__SUCCESS,
      payload:data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE__FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/products/${product._id}`, product , config);
    dispatch({
      type: PRODUCT_UPDATE__SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE__FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};