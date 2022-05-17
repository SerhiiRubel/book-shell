import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {useFormik} from 'formik';

import {selectIsSignUpLoading, signUpRequest} from '../../redux/auth/slice';
import {styles} from './styles';

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsSignUpLoading);
  const {values, handleChange} = useFormik({
    initialValues: {username: '', password: ''},
    onSubmit: () => undefined,
  });

  const signUp = () => {
    dispatch(signUpRequest(values));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Create your own account</Title>
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
        Sign up
      </Button>
    </ScrollView>
  );
};
