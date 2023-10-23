import { requestAPI } from '../utils/requests';
import { AxiosRequestConfig } from 'axios';

export function findByProfileNickName(profile: string)  {

    const config: AxiosRequestConfig = {
        method: "GET",
        url: `/${profile}`,
 
    }
    return requestAPI(config);
}