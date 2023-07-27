import { configureStore } from "@reduxjs/toolkit";
import dataListReducer from "../modules/dataListSlice";
import categoryListReducer from "../modules/categoryListSlice";

const store = configureStore({
  reducer: { dataList: dataListReducer, categoryList: categoryListReducer },
});

export default store;
