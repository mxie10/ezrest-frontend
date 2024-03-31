import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/reservation';

export const fetchReservations = createAsyncThunk("fetchReservations", async (userID) => {
    try{
        const res = await api.getReservation(userID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})

export const fetchReservationByListingID = createAsyncThunk("fetchReservationByListingID", async (params) => {
    try{
        console.log("userID is:",params.userID);
        const res = await api.getReservationByListingID(params.listingID,params.userID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})