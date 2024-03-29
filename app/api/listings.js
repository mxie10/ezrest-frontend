import axios from 'axios';

const url = 'http://localhost:4000/api/listing';

export const fetchListings = () => axios.get(url);
