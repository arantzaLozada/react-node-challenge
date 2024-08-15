import axios from 'axios';

export const myApi = axios.create({ baseURL: 'http://www.localhost:3000/api' });
