import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true, error: payload };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
};
