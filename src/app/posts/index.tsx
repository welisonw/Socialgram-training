import { useGetPosts } from '@/src/queries/useGetPosts';
import { Text, View } from 'react-native';

export default function Posts() {
  const { data } = useGetPosts();
  const posts = data?.documents ?? [];

  return (
    <View className="flex-1 items-center justify-center gap-y-4">
      {posts.map((post) => (
        <View className="gap-y-1">
          <View className="flex-row gap-x-1">
            <Text className="font-bold">Título:</Text>
            <Text>{post.fields.title.stringValue}</Text>
          </View>

          <View className="flex-row gap-x-1">
            <Text className="font-bold">Visualizações:</Text>
            <Text>{post.fields.views.integerValue}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
