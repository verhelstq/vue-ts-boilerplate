import axios from 'axios';

const instance = axios.create({
  baseURL : location.hostname == 'localhost' ? 'http://localhost:3000/api' : '/api',
  headers : {
    "X-Authentication-ID" : null
  },
})

export default instance;