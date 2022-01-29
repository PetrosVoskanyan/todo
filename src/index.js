import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { store } from './store';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GeneralMuiConfig } from './components/main-providers/general-mui-config';

ReactDOM.render(
  <React.StrictMode>
    <GeneralMuiConfig>
      <Provider store={store}>
        <BrowserRouter basename="/todo">
          <App />
        </BrowserRouter>
      </Provider>
    </GeneralMuiConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
