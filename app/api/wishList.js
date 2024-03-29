import axios from 'axios';

const url = 'http://localhost:4000/api/user';

export const getWishLists = (userID) => axios.get(`${url}/wishLists/${userID}`);