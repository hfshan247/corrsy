/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {name as appName} from './app.json';

let persistor = persistStore(store);
const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
