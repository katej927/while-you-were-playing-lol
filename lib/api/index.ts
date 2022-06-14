import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;

export { getSummonerDataAPI } from './riot';
export { createUser } from './auth';
