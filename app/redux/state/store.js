import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlicer";
import listingReducer from "./listings/listingSlicer";
import wishListsReducer from "./wishList/wishListSlicer";
import reservationReducer from "./reservation/reservationSlicer";

const store = configureStore({
    reducer:{
        listings: listingsReducer,
        listing: listingReducer,
        wishLists: wishListsReducer,
        reservations: reservationReducer
    }
})

export default store;