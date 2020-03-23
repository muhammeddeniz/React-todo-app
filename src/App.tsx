import React from 'react';
import Todo from './components/todos';
import {TodoStore} from './store/store';
import { observer } from 'mobx-react';

interface Iprops{
  store?: TodoStore; 
}

const  App : React.FC<{props: TodoStore}> = observer(({props}) => {
  return (
    <div className="App">
      <Todo store= {props}/>
    </div>
  );
})

export default App;
