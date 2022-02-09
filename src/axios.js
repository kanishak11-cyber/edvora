import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://assessment-edvora.herokuapp.com/'
});
export default instance;