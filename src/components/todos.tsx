import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../store/store";

const TodoList: React.FC<{ store: TodoStore }> = observer(props => {
  useEffect(() => {
    console.log(props.store.todo);
  });

  return (
    <div className="content">
      <h1 className="count">{props.store.count()}</h1>
      <input
        type="text"
        value={props.store.todo}
        onChange={e => props.store.setTodo(e.target.value)}
      />
      <button className="btn-add" onClick={props.store.addTodo}>
        Add
      </button>

        <div className="items">

      {props.store.todos.map(index => {
        return <><li className="todos">{index}</li><br/></>;
      })}
        </div>
    </div>
  );
});

export default TodoList;
