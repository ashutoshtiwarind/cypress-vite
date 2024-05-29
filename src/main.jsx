// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App';
import { messages } from './messages';
import './index.css';

const locale = navigator.language.split('-')[0]; // Get the browser's locale
const defaultLocale = 'en';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale] || messages[defaultLocale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

