import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/jquery/dist/jquery.slim.min.js"
import "../node_modules/popper.js/dist/umd/popper.min.js"
import './index.css';
import App from './App';

ReactDOM.render(
    <CookiesProvider>
       <App />
    </CookiesProvider>,
    document.getElementById('root')
 );


