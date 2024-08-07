import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";

const basicUrl = "http://localhost:8000/api/menu";

const productRequest = () => {
  return { type: PRODUCT_REQUEST };
};

const productFailure = (payload) => {
  return { type: PRODUCT_FAILURE, payload };
};

const getProductsucess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

export const getProducts = () => (dispatch) => {
  dispatch(productRequest);
  axios
    .get(`${basicUrl}/items`)
    .then((res) => {
      dispatch(getProductsucess(res.data));
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      dispatch(productFailure(err.message));
    });
};
