import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export const fetchListings = (params) => axios.get(`${url}/api/listing`, {params});

export const fetchListing = (listingID) => {
    return axios.get(`${url}/api/listing/${listingID}`)
}

export const updateAvailableDate = (listingID,availableDate) => {
    return axios.put(`${url}/api/listing/availableDate/${listingID}`,{
        availableDate:availableDate
    })
}

