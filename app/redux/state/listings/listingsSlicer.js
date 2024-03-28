import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListings } from '../../actions/listings';

const listingsSlice = createSlice({
    name:'listings',
    initialState:{
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListings.pending, (state,action) => {
            state.isLoading = true
        });
        builder.addCase(fetchListings.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchListings.rejected, (state,action) => {
            state.error = true;
        })
    }
})

export default listingsSlice.reducer;