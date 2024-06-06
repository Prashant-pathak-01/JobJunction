// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Publishable Key not found. Ensure it's set in your environment variables.");
}

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
