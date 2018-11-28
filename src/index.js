import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
//import SideBar from './components/sidebar';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();