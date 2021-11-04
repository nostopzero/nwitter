import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {authService} from "./firebase";

console.log(authService);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
