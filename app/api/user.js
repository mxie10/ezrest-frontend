import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export const updateFavoriteList = (userID,listingID) => {

    const updateData = {
        listingID: listingID
    }

    return axios.put(`${url}/api/user/addFavorite/${userID}`,updateData)
        .then(res=>{
            console.log('Favorite list updated successfully:', res.data);
            return res.data; 
        }).catch(error=>{
            console.error('Error updating favorite list:', error);
            throw error; 
        })
}