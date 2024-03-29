import axios from 'axios';

const url = 'http://localhost:4000/api/user';

export const updateFavoriteList = (userID,listingID) => {

    const updateData = {
        listingID: listingID
    }

    return axios.put(`${url}/addFavorite/${userID}`,updateData)
        .then(res=>{
            console.log('Favorite list updated successfully:', res.data);
            return res.data; 
        }).catch(error=>{
            console.error('Error updating favorite list:', error);
            throw error; 
        })
}