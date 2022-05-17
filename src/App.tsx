import React from 'react';
import 'react-native-gesture-handler';

import Toast from 'react-native-toast-message';

import {AppNavigator} from './navigation';
import {store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <AppNavigator />
        <Toast />
      </>
    </Provider>
  );
};

export default App;
