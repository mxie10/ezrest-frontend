import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/wishList';

export const fetchWishLists = createAsyncThunk("fetchWishList", async (userID) => {
    try{
        const res = await api.getWishList(userID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})