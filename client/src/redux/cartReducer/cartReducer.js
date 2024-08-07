import {
  CART_DELETE_PRODUCT_SUCCESS,
  CART_GET_PRODUCT_SUCCESS,
  CART_POST_PRODUCT_SUCCESS,
  CART_PRODUCT_FAILURE,
  CART_PRODUCT_REQUEST,
} from "../actionTypes";

const initialState = {
  cartProducts: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case CART_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true, error: payload };
    }
    case CART_POST_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartProducts: [...state.cartProducts, payload],
      };
    }
    case CART_GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartProducts: payload,
      };
    }
    case CART_POST_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case CART_DELETE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
