import axios from 'axios';
import { BASE_URL } from '../utils/system';


export function findByProfileNickName(id: string)  {
    return axios.get(`${BASE_URL}/${id}`)
}