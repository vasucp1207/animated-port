import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContext.Provider value={setTheme}>
    <div>
      <App />
    </div>
  </ThemeContext.Provider>
);