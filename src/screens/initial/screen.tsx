import React from 'react';
import {View} from 'react-native';
import {Button, Title, Text} from 'react-native-paper';

import {AuthStackNavigationProp} from '../../navigation/auth-stack';
import {screenNames} from '../../constants';
import {styles} from './styles';

export type InitialProps = {
  navigation: AuthStackNavigationProp;
};

export const Initial: React.FC<InitialProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome to the Book Shell</Title>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate(screenNames.LOG_IN)}>
        Log In
      </Button>
      <Text style={styles.text}>or</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate(screenNames.SIGN_UP)}>
        Sign Up
      </Button>
    </View>
  );
};
