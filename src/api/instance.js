import axios from "axios"
import queryString from 'query-string';
import { apiKey } from './requestsMvList'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout:10000,
    paramsSerializer: params => queryString.stringify({...params, api_key: apiKey})
});


instance.interceptors.request.use(async (config) => config);

instance.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});


export default instance