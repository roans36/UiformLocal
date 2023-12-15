import { configureStore } from "@reduxjs/toolkit";
import blgReducer from '../features/blgSlice';






export const store= configureStore({
    reducer:{
        blog: blgReducer
    }


});