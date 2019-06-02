import axios from 'axios';
import store from '../store/store';

const httpClient = axios.create({});

httpClient.interceptors.request.use(function (config) {
    store.dispatch({type: "REQUEST"});
    console.log(config);
    return config;
}, function (error) {
    store.dispatch({type: "REQUEST_DONE"});
    return Promise.reject(error);
});

httpClient.interceptors.response.use(function (response) {
    store.dispatch({type: "REQUEST_DONE"});
    return response;
}, function (error) {
    store.dispatch({type: "REQUEST_DONE"});
    return Promise.reject(error);
});


export default httpClient;