import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/reservation';

export const fetchReservations = createAsyncThunk("fetchReservations", async (userID) => {
    try{
        const res = await api.getReservation(userID);
        console.log('res:',res);
        return res.data;
    }catch(error){
        console.log(error);
    }
})