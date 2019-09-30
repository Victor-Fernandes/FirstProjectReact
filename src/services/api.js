import axios from 'axios';

const api = axios.create({
  // url que vai ser chamada em todas
  // as requisiçoes.
  baseURL: 'https:api.github.com',
});

export default api;
