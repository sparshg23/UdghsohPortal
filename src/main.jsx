import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom'; // For routing
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot from react-dom/client
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
