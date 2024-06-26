import { createSlice } from "@reduxjs/toolkit";
import { fetchReservationByListingID } from '../../actions/reservations';

const reservationSlicer = createSlice({
    name:'reservations',
    initialState:{
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReservationByListingID.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchReservationByListingID.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchReservationByListingID.rejected, (state) => {
            state.error = true;
        });
    }
})

export default reservationSlicer.reducer;