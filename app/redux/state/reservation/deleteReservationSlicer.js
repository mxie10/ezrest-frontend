import { createSlice } from "@reduxjs/toolkit";
import { deleteReservation } from '../../actions/reservations';

const deleteReservationSlice = createSlice({
    name: 'deleteReservation',
    initialState: {
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteReservation.pending, (state) => {
                state.isLoading = true;
                state.error = null; 
            })
            .addCase(deleteReservation.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteReservation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export default deleteReservationSlice.reducer;
