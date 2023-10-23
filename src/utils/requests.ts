import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

export function requestAPI(config: AxiosRequestConfig) {

    const headers = {

        ...config.headers,

    }
   
    return axios({ ...config, baseURL: BASE_URL, headers })
}