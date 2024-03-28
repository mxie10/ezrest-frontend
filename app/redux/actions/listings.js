import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/listings';

export const fetchListings = createAsyncThunk("fetchListings", async () => {
    try{
        const res = await api.fetchListings();
        return res.data;
    }catch(error){
        console.log(error);
    }
})