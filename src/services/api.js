import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.177:19003/api/',
});

export default api;