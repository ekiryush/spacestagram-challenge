import axios from 'axios';

const fetchSavedImages = async () => await axios.get(process.env.REACT_APP_DATABASE_URL);

export default fetchSavedImages;
