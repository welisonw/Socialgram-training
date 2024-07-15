import { useMutation } from '@tanstack/react-query';
import { LOGIN_AUTH_QUERY_KEY } from '../constants/queries';
import { ILoginAuth } from '../schemas/AuthSchema';
import { apiAuth } from '../services/apiAuth';
import { env } from '../config/env';
import { router } from 'expo-router';
import { Alert } from 'react-native';

export const useLogin = () => {
  return useMutation({
    mutationKey: [LOGIN_AUTH_QUERY_KEY],
    mutationFn: async (mutationData: ILoginAuth) => {
      const response = await apiAuth.post(
        `/accounts:signInWithPassword?key=${env.EXPO_PUBLIC_API_KEY}`,
        {
          ...mutationData,
          returnSecureToken: true,
        },
      );
      return response.data;
    },
    onSuccess: () => {
      router.push('/posts');
    },
    onError: () => {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    },
  });
};
