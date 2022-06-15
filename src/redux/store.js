import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./alert";
import productReducer from "./product";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    product: productReducer,
  },
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
