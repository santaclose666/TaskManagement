import React from 'react';
import 'react-native-get-random-values';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigation from './src/navigate/RootNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootNavigation />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
