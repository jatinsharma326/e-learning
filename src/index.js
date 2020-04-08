import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
// import Login from './Authenticate/login';


const fix = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    fix);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
