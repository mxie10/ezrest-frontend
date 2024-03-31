import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/listings';

export const fetchListings = createAsyncThunk("fetchListings", async (params) => {
    try{
        const res = await api.fetchListings(params);
        return res.data;
    }catch(error){
        console.log(error);
    }
})

export const fetchListing = createAsyncThunk("fetchListing", async (listingID) => {
    try{
        const res = await api.fetchListing(listingID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})