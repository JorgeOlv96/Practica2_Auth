import { View, Text } from "react-native"
import React from "react"
import { TextInput, Button } from "react-native-paper"
import { globalStyles } from "../../../styles"
import { useFormik } from "formik"
import * as Yup from "yup"
import { authApi } from "../../../api/auth"
import { useAuth } from '../../../hooks/useAuth';
import Toast from "react-native-root-toast";

export default function LoginForm(props) {
  const { setShowLogin, setUser } = props
  const {login} = useAuth();

  const formik = useFormik({
      initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true).min(6,true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const { email, password } = formData;
        const response = await authApi.login(email, password);
        login(response.jwt)
        Alert.alert('Fue logueado exitosamente'); // Show success alert
      } catch (error) {
        Toast.show('Usuario o contraseña incorrectos', {
          position: Toast.positions.CENTER
        });

      }
    }
  });

  return (
    <View>
      <TextInput
        label="Email"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      ></TextInput>
      <TextInput
        label="Password"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      ></TextInput>
      <Button
        mode="contained"
        style={globalStyles.form.buttonSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Log in
      </Button>
      <Button
        mode="text"
        style={globalStyles.form.buttonText}
        onPress={() => setShowLogin(false)}
      >
        Register
      </Button>
    </View>
  )
}
