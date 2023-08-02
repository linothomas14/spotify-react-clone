import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContext } from './helper/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
const handleTheme = () => {
  console.log('dark')
}
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={{ theme: 'salmon', handleTheme }}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
