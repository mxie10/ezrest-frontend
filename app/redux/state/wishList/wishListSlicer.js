import { createSlice } from "@reduxjs/toolkit";
import { fetchWishLists } from '../../actions/wishLists';

const wishListsSlice = createSlice({
    name:'wishLists',
    initialState:{
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWishLists.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchWishLists.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchWishLists.rejected, (state) => {
            state.error = true;
        });
    }
})

export default wishListsSlice.reducer;