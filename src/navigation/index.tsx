import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {navigationRef} from '../services/navigation.service';
import {selectIsSignedIn} from '../redux/auth/slice';
import {selectDarkMode, selectIsInitialized} from '../redux/app/slice';
import {AppStack} from './app-stack';
import {AuthStack} from './auth-stack';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export const AppNavigator = () => {
  const isInitialized = useSelector(selectIsInitialized);
  const isSignedIn = useSelector(selectIsSignedIn);
  const isDarkMode = useSelector(selectDarkMode);

  let theme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;

  return isInitialized ? (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        {isSignedIn ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
