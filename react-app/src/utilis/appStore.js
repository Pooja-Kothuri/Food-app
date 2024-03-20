import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
const appStore=configureStore({
    //contains reducers of app
    reducer:{
        cart:cartReducer,
    }
});

export default appStore;