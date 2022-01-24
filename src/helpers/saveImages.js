import axios from 'axios';

const saveToStorage = async items => {
    await axios.put(process.env.REACT_APP_DATABASE_URL, {
        body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export default saveToStorage;
