import { createSlice } from "@reduxjs/toolkit";
import { fetchReservations } from '../../actions/reservations';

const reservationsSlice = createSlice({
    name:'reservations',
    initialState:{
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReservations.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchReservations.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchReservations.rejected, (state) => {
            state.error = true;
        });
    }
})

export default reservationsSlice.reducer;