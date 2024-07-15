import axios from 'axios';

export const apiAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
});
