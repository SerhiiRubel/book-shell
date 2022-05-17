import React from 'react';
import {ScrollView} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';

import {logInRequest, selectIsLoginLoading} from '../../redux/auth/slice';
import {styles} from './styles';

export const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoginLoading);
  const {values, handleChange} = useFormik({
    initialValues: {username: '', password: ''},
    onSubmit: () => undefined,
  });

  const signUp = () => {
    dispatch(logInRequest(values));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Log in to your account</Title>
      <TextInput
        style={styles.input}
        label="Username"
        value={values.username}
        onChangeText={handleChange('username')}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={values.password}
        onChangeText={handleChange('password')}
      />
      <Button
        style={styles.button}
        mode="contained"
        loading={isLoading}
        disabled={isLoading}
        onPress={signUp}>
        Log In
      </Button>
    </ScrollView>
  );
};
