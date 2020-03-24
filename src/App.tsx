import React from 'react';
import Todo from './components/todos';
import {TodoStore} from './store/store';
import { observer } from 'mobx-react';
import   './styles/list.scss';

interface Iprops{
  store?: TodoStore; 
}

const  App : React.FC<{props: TodoStore}> = observer(({props}) => {
  return (
    <div className="App">
      <a href=""><h1 className="title">Todo App</h1></a>
      
      <Todo store= {props}/>
    </div>
  );
})

export default App;
