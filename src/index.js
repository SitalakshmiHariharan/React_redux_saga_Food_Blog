import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
         <App/>
    </React.StrictMode>
  </Provider>
  </Router>  
  ,
  document.getElementById('root')
);


