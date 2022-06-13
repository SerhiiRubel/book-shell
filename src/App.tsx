import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';

import {AppNavigator} from './navigation';

import {store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      {/*{ TODO: write some changes }*/}
      <PaperProvider>
        <AppNavigator />
        <Toast />
      </PaperProvider>
    </Provider>
  );
};

export default App;
