import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCategoryList } = categoryListSlice.actions;
export default categoryListSlice.reducer;
