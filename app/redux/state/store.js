import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlicer";

const store = configureStore({
    reducer:{
        listings: listingsReducer
    }
})

export default store;