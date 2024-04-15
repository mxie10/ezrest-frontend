import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export const updateFavoriteList = (userID,listingID) => {

    const updateData = {
        listingID: listingID
    }

    return axios.put(`${url}/api/user/addFavorite/${userID}`,updateData);
}

export const deleteFavoriteList = (userID,listingID) => {

    const updateData = {
        listingID: listingID
    }

    return axios.put(`${url}/api/user/deleteFavorite/${userID}`,updateData);
}