import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { clientPersister } from '../storage/clientPersister';

const queryClient = new QueryClient();

export default function _Layout() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: clientPersister }}
    >
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </PersistQueryClientProvider>
  );
}
