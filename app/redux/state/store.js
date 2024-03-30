import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlicer";
import listingReducer from "./listings/listingSlicer";
import wishListsReducer from "./wishList/wishListSlicer";

const store = configureStore({
    reducer:{
        listings: listingsReducer,
        listing: listingReducer,
        wishLists: wishListsReducer
    }
})

export default store;