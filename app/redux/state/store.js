import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlicer";
import listingReducer from "./listings/listingSlicer";
import wishListsReducer from "./wishList/wishListSlicer";
import reservationsReducer from "./reservation/reservationsSlicer";
import reservationReducer from "./reservation/reservationSlicer";
import deleteReservationSlicer from "./reservation/deleteReservationSlicer";

const store = configureStore({
    reducer:{
        listings: listingsReducer,
        listing: listingReducer,
        wishLists: wishListsReducer,
        reservations: reservationsReducer,
        reservation: reservationReducer,
        deleteReservation: deleteReservationSlicer
    }
})

export default store;