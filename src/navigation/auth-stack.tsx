import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import {Initial, LogIn, SignUp} from '../screens';
import {Header} from '../components/header';
import {screenNames} from '../constants';

export type AuthStackParamList = {
  [screenNames.INITIAL]: undefined;
  [screenNames.LOG_IN]: undefined;
  [screenNames.SIGN_UP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export type AuthStackNavigationProp =
  StackScreenProps<AuthStackParamList>['navigation'];
export type AuthStackRouteProp = StackScreenProps<AuthStackParamList>['route'];

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      // @ts-ignore
      header: props => <Header {...props} />,
    }}>
    <Stack.Screen name={screenNames.INITIAL} component={Initial} />
    <Stack.Screen name={screenNames.LOG_IN} component={LogIn} />
    <Stack.Screen name={screenNames.SIGN_UP} component={SignUp} />
  </Stack.Navigator>
);
