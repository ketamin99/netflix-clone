import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { clientStore } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
            <Provider store={clientStore}  >
                  <App />
            </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

