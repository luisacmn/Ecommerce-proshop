import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const middleware = [thunk];
const initialState = {};

const store = configureStore({ reducer: reducer }, middleware, initialState);

export default store;

//the function "configureStore" automatically combines reducers, adds thunk middleware and uses devtools
