import axios from 'axios';

const url = 'http://localhost:4000/api/reservation';

export const makeReservation = (requestData) => {
    return axios.post(url, requestData);
}

export const getReservation = (userID) => {
    return axios.get(`${url}/${userID}`);
}