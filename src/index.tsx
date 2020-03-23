import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TodoStore} from './store/store';

const store = new TodoStore();

ReactDOM.render(
  <React.StrictMode >
    <App props={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
