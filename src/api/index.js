import axios from 'axios';

const fetchImagesByCount = async count =>
    await axios.get(process.env.REACT_APP_NASA_API_URL, {
        params: {
            api_key: process.env.REACT_APP_NASA_API_KEY,
            count: count,
        },
    });

export default fetchImagesByCount;
