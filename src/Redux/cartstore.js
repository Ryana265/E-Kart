import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
import wishListSlice from './slice/wishListSlice'

const cartStore=configureStore({
    reducer:{
        productReducer:productSlice,
        WishListReducer:wishListSlice,
    }

})

export default cartStore