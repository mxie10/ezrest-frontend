import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/wishList';

export const fetchWishLists = createAsyncThunk("fetchWishLists", async (userID) => {
    try{
        const res = await api.getWishLists(userID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})