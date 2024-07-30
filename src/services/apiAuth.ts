import axios from 'axios';
import { axiosResponseInterceptor } from '../utils/axiosResponseInterceptor';

export const apiAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
});

axiosResponseInterceptor(apiAuth);
