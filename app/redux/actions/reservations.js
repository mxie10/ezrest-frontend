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
        const res = await api.getReservationByListingID(params.listingID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})

export const deleteReservation = createAsyncThunk("deleteReservation", async (listingID) => {
    try{
        const res = await api.deleteReservation(listingID);
        return res.data;
    }catch(error){
        console.log(error);
    }
})