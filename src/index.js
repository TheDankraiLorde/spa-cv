import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/header'
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <div>
        <Header/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
