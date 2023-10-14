

import axios from '../cors/axios-configure';

export function findByProfileNickName(profile: unknown)  {
    return axios.get(`/${profile}`)
}