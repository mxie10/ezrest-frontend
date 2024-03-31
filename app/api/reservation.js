import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export const makeReservation = (requestData) => {
    return axios.post(`${url}/api/reservation`, requestData);
}

export const getReservation = (userID) => {
    return axios.get(`${url}/api/reservation/${userID}`);
}
