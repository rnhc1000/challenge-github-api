import axios from 'axios';
import { BASE_URL } from '../utils/system';

const app = axios.create({
    baseURL: BASE_URL,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
    }
    // ,
    // withCredentials: true
})

export default (app);

