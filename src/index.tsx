import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/';
import { offers } from './const';
import { AuthorizationStatus } from './const';

const authorizationStatus = AuthorizationStatus.NoAuth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App offers={ offers } authorizationStatus={ authorizationStatus } />
  </React.StrictMode>
);
