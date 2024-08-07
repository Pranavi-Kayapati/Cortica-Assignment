import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./porductReducer/productReducer";
import { cartReducer } from "./cartReducer/cartReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({ productReducer, cartReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
