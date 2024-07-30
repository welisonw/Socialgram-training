import { Redirect } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { ILoginAuthMutationState } from '../schemas/AuthSchema';
import { LOGIN_AUTH_QUERY_KEY } from '../constants/queries';
import { ActivityIndicator } from 'react-native';

export default function Index() {
  const { data, isLoading } = useQuery<ILoginAuthMutationState>({
    queryKey: LOGIN_AUTH_QUERY_KEY,
    enabled: false,
  });

  if (isLoading) return <ActivityIndicator />;

  console.log(data);

  if (!data) return <Redirect href="/login" />;

  return <Redirect href="/posts/list" />;
}
