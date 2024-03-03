import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/';
import { offers, favorites, comments } from './const';
import { AuthorizationStatus } from './const';

const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      authorizationStatus={ authorizationStatus }
      offers={ offers }
      favorites={favorites}
      comments={comments}
    />
  </React.StrictMode>
);
