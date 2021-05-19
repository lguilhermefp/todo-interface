import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import App from './App';
import 'typeface-roboto';
import { configureStore } from './redux-store/store';
import { Provider } from 'react-redux';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

