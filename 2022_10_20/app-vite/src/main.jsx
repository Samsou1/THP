import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Customers from './components/Customers/customers'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <Customers />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <App />
);
