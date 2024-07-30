import { Link } from 'expo-router';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface PostProps extends TouchableOpacityProps {
  title: string;
  body: string;
}

export const Post = ({ title, body, ...props }: PostProps) => {
  return (
    <Link
      href={{ pathname: './[id]/edit', params: { id: title } }}
      asChild
    >
      <TouchableOpacity
        activeOpacity={0.5}
        className="bg-sky-100 flex-1 mx-4 my-1.5 p-4 rounded shadow-sm"
        {...props}
      >
        <Text
          numberOfLines={1}
          className="font-bold mb-2"
        >
          {title}
        </Text>
        <Text numberOfLines={5}>{body}</Text>
      </TouchableOpacity>
    </Link>
  );
};
