import axios from 'axios';

const url = 'http://localhost:4000/api/wishList';

export const getWishList = (userID) => axios.get(`${url}/${userID}`);

export const addWishList = (userID, listingID) => {
    const requestData = {
        userID: userID,
        listingID: listingID
    };
    return axios.post(url, requestData);
}

export const deleteWishList = (listingID) => {
    return axios.delete(`${url}/${listingID}`);
}