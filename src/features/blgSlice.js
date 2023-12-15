import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, setToLocal } from "./local";






const blgSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getBlogs()
  },
  reducers: {

    addBlogs: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      setToLocal(state.blogs);
    },
    updateBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog
      });
      setToLocal(state.blogs);
    }
  }

});
export const { addBlogs, updateBlog } = blgSlice.actions;
export default blgSlice.reducer;