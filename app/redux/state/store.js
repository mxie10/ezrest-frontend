import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlicer";
import wishListsReducer from "./wishList/wishListSlicer";

const store = configureStore({
    reducer:{
        listings: listingsReducer,
        wishLists: wishListsReducer
    }
})

export default store;