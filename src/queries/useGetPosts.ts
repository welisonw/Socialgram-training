import { useMutationState, useQuery } from '@tanstack/react-query';
import {
  GET_POSTS_QUERY_KEY,
  LOGIN_AUTH_QUERY_KEY,
} from '../constants/queries';
import { ILoginAuthMutationState } from '../schemas/AuthSchema';
import { apiFirestore } from '../services/apiFirestore';
import { IPosts } from '../schemas/Posts';

export const useGetPosts = () => {
  const [data] = useMutationState<ILoginAuthMutationState>({
    filters: {
      mutationKey: [LOGIN_AUTH_QUERY_KEY],
    },
    select: (mutation) => mutation.state.data as ILoginAuthMutationState,
  });

  return useQuery<IPosts>({
    queryKey: [GET_POSTS_QUERY_KEY],
    queryFn: async () => {
      const response = await apiFirestore.get('/documents/posts', {
        headers: {
          Authorization: `Bearer ${data?.idToken}`,
        },
      });
      return response.data;
    },
    enabled: !!data?.idToken,
  });
};
