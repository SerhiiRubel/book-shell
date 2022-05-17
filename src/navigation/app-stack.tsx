import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';

import {Discovery, DiscoveryDetail} from '../screens';
import {Header} from '../components/header';
import {screenNames} from '../constants';

export type AppStackParamList = {
  [screenNames.DISCOVERY]: undefined;
  [screenNames.DISCOVERY_DETAIL]: {id: string; title: string};
};

const Stack = createStackNavigator<AppStackParamList>();

export type AppStackNavigationProp =
  StackScreenProps<AppStackParamList>['navigation'];
export type AppStackRouteProp = StackScreenProps<AppStackParamList>['route'];

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      // @ts-ignore
      header: props => <Header {...props} />,
    }}>
    <Stack.Screen name={screenNames.DISCOVERY} component={Discovery} />
    <Stack.Screen
      name={screenNames.DISCOVERY_DETAIL}
      component={DiscoveryDetail}
    />
  </Stack.Navigator>
);
