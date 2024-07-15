import { useState } from 'react';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLogin } from '@/src/queries/useLogin';
import { ILoginAuth, LoginAuthSchema } from '@/src/schemas/AuthSchema';

const initialValues = { email: '', password: '' };

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useLogin();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = (values: ILoginAuth) => {
    mutate(values);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center mx-6">
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={toFormikValidationSchema(LoginAuthSchema)}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => {
          const hasErrors = Object.keys(errors).length > 0;

          return (
            <View className="w-full">
              <View className="mb-8 gap-y-3">
                <Text className="text-center font-bold text-4xl">
                  Bem-vindo
                </Text>

                <View className="gap-y-1">
                  <Text className="text-lg">Email</Text>
                  <TextInput
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="bg-gray-300"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    className="border border-gray-300 p-4 rounded"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  {errors.email && touched.email && (
                    <Text className="text-red-500">{errors.email}</Text>
                  )}
                </View>

                <View className="w-full gap-y-1">
                  <Text className="text-lg">Senha</Text>
                  <View className="flex-row justify-center items-center">
                    <TextInput
                      placeholder="Digite sua senha"
                      placeholderTextColor="bg-gray-300"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      className="flex-1 border border-gray-300 p-4 rounded"
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                    />
                    <TouchableOpacity
                      className="absolute right-4"
                      onPress={handleShowPassword}
                      activeOpacity={0.8}
                    >
                      <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && touched.password && (
                    <Text className="text-red-500">{errors.password}</Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                className={`pt-10 p-4 rounded items-center justify-center shadow-sm ${
                  hasErrors ? 'bg-gray-300' : 'bg-gray-800'
                }`}
                onPress={() => handleSubmit()}
                activeOpacity={0.8}
                disabled={hasErrors || isPending}
              >
                <Text className="text-white font-medium text-lg">
                  {isPending ? <ActivityIndicator size="small" /> : 'Entrar'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};
