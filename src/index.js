import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from "./components/App";

import configureStore from "./store/configureStore";

let store = configureStore();

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
