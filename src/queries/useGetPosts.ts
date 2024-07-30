import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  GET_POSTS_QUERY_KEY,
  LOGIN_AUTH_QUERY_KEY,
} from '../constants/queries';
import { ILoginAuthMutationState } from '../schemas/AuthSchema';
import { apiFirestore } from '../services/apiFirestore';
import { PostsSchema } from '../schemas/Posts';

export const useGetPosts = () => {
  const { data } = useQuery<ILoginAuthMutationState>({
    queryKey: LOGIN_AUTH_QUERY_KEY,
    enabled: false,
  });

  return useInfiniteQuery({
    queryKey: GET_POSTS_QUERY_KEY,
    queryFn: ({ pageParam }) =>
      apiFirestore
        .get('/documents/posts', {
          headers: {
            Authorization: `Bearer ${data?.idToken}`,
          },
          params: {
            pageSize: 15,
            pageToken: pageParam,
          },
        })
        .then(({ data }) => PostsSchema.parse(data)),
    select: ({ pageParams, pages }) => ({
      pageParams,
      pages: pages.flatMap(({ documents }) =>
        documents.map(({ fields: { body, title }, name }) => ({
          body: body.stringValue,
          title: title.stringValue,
          id: name.split('/').pop(),
        })),
      ),
    }),
    initialPageParam: undefined as undefined | string,
    getNextPageParam: ({ nextPageToken }) => {
      return nextPageToken;
    },
    enabled: !!data?.idToken,
    throwOnError: (error) => {
      console.log(error);
      return false;
    },
  });
};
