import { configureStore } from "@reduxjs/toolkit";
import dataListReducer from "../modules/dataListSlice";

const store = configureStore({
  reducer: { dataList: dataListReducer },
});

export default store;
