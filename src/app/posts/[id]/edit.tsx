import { router } from 'expo-router';
import { Formik } from 'formik';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditPost() {
  const handleOnBack = () => {
    router.back();
  };

  return (
    <Formik
      initialValues={{ title: '', body: '' }}
      onSubmit={() => {}}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <View className="flex-1 m-4 gap-y-4">
          <Text className="text-2xl font-medium">Edite seu post</Text>

          <View className="">
            <TouchableOpacity
              onPress={handleOnBack}
              className="bg-gray-200 p-4 rounded self-start"
            >
              <Text>Voltar</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Digite um título"
            placeholderTextColor="bg-gray-300"
            value={values.title}
            onChangeText={() => {}}
            className="border border-gray-300 p-4 rounded"
            autoCapitalize="none"
          />
          <TextInput />

          <TextInput
            placeholder="Digite um título"
            placeholderTextColor="bg-gray-300"
            value={values.title}
            onChangeText={() => {}}
            className="border border-gray-300 p-4 rounded"
            autoCapitalize="none"
          />
          <TextInput />
        </View>
      )}
    </Formik>
  );
}
