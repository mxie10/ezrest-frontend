import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export const getWishList = (userID) => axios.get(`${url}/api/wishList/${userID}`);

export const addWishList = (userID, listingID) => {
    const requestData = {
        userID: userID,
        listingID: listingID
    };
    return axios.post(`${url}/api/wishList`, requestData);
}

export const deleteWishList = (listingID) => {
    return axios.delete(`${url}/api/wishList/${listingID}`);
}
