import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.11.7:3333'    
});

export default api;