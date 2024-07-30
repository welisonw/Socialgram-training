import axios from 'axios';
import { env } from '../config/env';
import { axiosResponseInterceptor } from '../utils/axiosResponseInterceptor';

export const apiFirestore = axios.create({
  baseURL: `https://firestore.googleapis.com/v1/projects/${env.EXPO_PUBLIC_PROJECT_ID}/databases/(default)`,
});

axiosResponseInterceptor(apiFirestore);
