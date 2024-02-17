import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cardAmount: number = Setting.CARDS_AMOUNT;

root.render(
  <React.StrictMode>
    <App cardAmount={ cardAmount } />
  </React.StrictMode>
);
