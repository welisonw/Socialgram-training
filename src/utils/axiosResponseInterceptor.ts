import { AxiosError, AxiosInstance } from 'axios';
import { router } from 'expo-router';
import { Alert } from 'react-native';

enum HTTP_STATUS_CODE {
  UNAUTHORIZED = 401,
}

export const axiosResponseInterceptor = (api: AxiosInstance) => {
  return api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        Alert.alert(
          'Erro',
          'Falha na autenticação do usuário. Por favor, realize o login novamente.',
        );

        return router.replace('/');
      }

      return Promise.reject(error);
    },
  );
};
