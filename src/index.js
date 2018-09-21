import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById('root');
ReactDOM.render(<App />, root);
registerServiceWorker();

module.hot && module.hot.accept('./App', function () {
  let NextApp = require('./App');
  ReactDOM.render(<NextApp />, root);
});
