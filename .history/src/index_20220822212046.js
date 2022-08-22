import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';

const ThemeContext = createContext();
const [theme, setTheme] = useState("light")

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeContext.Provider value={setTheme}>
  <div>
    <App />
  </div>
);