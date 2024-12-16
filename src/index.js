import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css'; // Assuming you have index.css for global styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
