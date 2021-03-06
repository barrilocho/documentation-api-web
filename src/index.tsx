import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
}

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default randomString;