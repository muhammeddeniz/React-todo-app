import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TodoStore} from './store/store';

const store2 = new TodoStore();

interface Iprops {
  store: TodoStore;
  props: string;
}

ReactDOM.render(
  <React.StrictMode >
    <App Data={store2}/>
  </React.StrictMode>,
  document.getElementById('root')
);
