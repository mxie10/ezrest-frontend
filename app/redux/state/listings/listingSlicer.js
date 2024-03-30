import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListing } from '../../actions/listings';

const listingSlice = createSlice({
    name:'listings',
    initialState:{
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListing.pending, (state,action) => {
            state.isLoading = true
        });
        builder.addCase(fetchListing.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchListing.rejected, (state,action) => {
            state.error = true;
        });
    }
})

export default listingSlice.reducer;