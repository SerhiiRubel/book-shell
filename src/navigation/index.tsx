import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '../services/navigation.service';
import {selectIsSignedIn} from '../redux/auth/slice';
import {selectIsInitialized} from '../redux/app/selectors';
import {AppStack} from './app-stack';
import {AuthStack} from './auth-stack';

export const AppNavigator = () => {
  const isInitialized = useSelector(selectIsInitialized);
  const isSignedIn = useSelector(selectIsSignedIn);

  return isInitialized ? (
    <NavigationContainer ref={navigationRef}>
      {isSignedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
