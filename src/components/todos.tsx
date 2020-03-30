import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../store/store";
import Yapilicak from './yapilacak/index';
import Done from './yapildi/index';
import InputArea from './input area/index'
import Yapiliyor from './yapiliyor/index';

interface DataStore {
  store: TodoStore;
  props: string;
}

const TodoList: React.FC<{ Data: TodoStore }> = observer(props => {
  return (
    <div className="content">
     <InputArea Data={props.Data}/>
   
      <div className="store">
        <Yapilicak Iprops={props.Data}/>
        <Yapiliyor Iprops={props.Data}/>
        <Done Data={props.Data}/>
      </div>
    </div>
  );
});

export default TodoList;
