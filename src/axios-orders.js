import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://big-burger-react.firebaseio.com/'
});

export default instance;