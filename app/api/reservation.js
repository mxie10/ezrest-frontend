import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export const makeReservation = (requestData) => {
    return axios.post(`${url}/api/reservation`, requestData);
}

export const getReservation = (userID) => {
    return axios.get(`${url}/api/reservation/${userID}`);
}

export const getReservationByListingID = (listingID,userID) => {
    return axios.get(`${url}/api/reservation/listings/${listingID}?userID=${userID}`);
}

export const deleteReservation = (reservationID) => {
    console.log('how about here reservationID is:',reservationID);
    return axios.delete(`${url}/api/reservation/${reservationID}`);
}
