import { useGetPosts } from '@/src/queries/useGetPosts';
import { ActivityIndicator, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Post } from '@/src/components/Post/Post';

export default function Posts() {
  const {
    data,
    isFetchingNextPage,
    refetch,
    isRefetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetPosts();
  const { pages } = data ?? {};

  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator
          size="large"
          className="text-gray-600"
        />
      </View>
    );

  return (
    <FlashList
      data={pages}
      renderItem={({ item }) => <Post {...item} />}
      estimatedItemSize={200}
      refreshing={isRefetching}
      onRefresh={refetch}
      onEndReached={hasNextPage ? fetchNextPage : undefined}
      ListFooterComponent={
        isFetchingNextPage ? <ActivityIndicator /> : undefined
      }
      onEndReachedThreshold={0.5}
    />
  );
}
