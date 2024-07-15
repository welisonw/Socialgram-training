import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';

const queryClient = new QueryClient();

export default function _Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}