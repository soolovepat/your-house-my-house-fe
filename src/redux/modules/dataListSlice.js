import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleList: [],
  itemList: [],
};

const dataListSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {
    setArticleList: (state, action) => {
      state.articleList = action.payload;
    },
    setItemList: (state, action) => {
      state.itemList = action.payload;
    },
  },
});

export const { setArticleList, setItemList } = dataListSlice.actions;
export default dataListSlice.reducer;
