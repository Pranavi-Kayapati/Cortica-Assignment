import axios from "axios";
import {
  CART_DELETE_PRODUCT_SUCCESS,
  CART_GET_PRODUCT_SUCCESS,
  CART_PATCH_PRODUCT_SUCCESS,
  CART_POST_PRODUCT_SUCCESS,
  CART_PRODUCT_FAILURE,
  CART_PRODUCT_REQUEST,
} from "../actionTypes";

const basicUrl = "http://localhost:8000/api/cart";

const productRequest = () => ({ type: CART_PRODUCT_REQUEST });

const productFailure = (payload) => ({ type: CART_PRODUCT_FAILURE, payload });

const productSuccess = (payload) => ({
  type: CART_POST_PRODUCT_SUCCESS,
  payload,
});

const getProductSuccess = (payload) => ({
  type: CART_GET_PRODUCT_SUCCESS,
  payload,
});

export const cartPostProduct = (newProduct) => async (dispatch) => {
  dispatch(productRequest());
  try {
    const res = await axios.post(`${basicUrl}/add`, newProduct);
    dispatch(productSuccess(res.data));
  } catch (err) {
    dispatch(productFailure(err.message));
  }
};

export const cartGetProducts = () => async (dispatch) => {
  dispatch(productRequest());
  try {
    const res = await axios.get(basicUrl);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(productFailure(err.message));
  }
};

export const cartUpdateProduct = (newData, id) => async (dispatch) => {
  dispatch(productRequest());
  try {
    const res = await axios.put(`${basicUrl}/update/${id}`, newData);
    const response = await axios.get(basicUrl);
    dispatch(getProductSuccess(response.data));

    dispatch({ type: CART_PATCH_PRODUCT_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(productFailure(err.message));
  }
};

export const cartDeleteProduct = (id) => async (dispatch) => {
  dispatch(productRequest());
  try {
    await axios.delete(`${basicUrl}/delete/${id}`);
    const response = await axios.get(basicUrl);
    dispatch(getProductSuccess(response.data));

    dispatch({ type: CART_DELETE_PRODUCT_SUCCESS, payload: id });
    console.log("product deleted");
  } catch (err) {
    dispatch(productFailure(err.message));
  }
};
