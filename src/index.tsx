import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// server 
import { setupServer } from './server/server';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

