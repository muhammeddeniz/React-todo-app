import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../store/store";

const TodoList: React.FC<{ store: TodoStore }> = observer(props => {
  useEffect(() => {
    console.log("props.store.todo");
    console.log(props.store.yapilanlar);

    if (props.store.yapilanlar.length === 1 - 1) {
      setYapildi("Done List is Empty");
    } else {
      setYapildi("");
    }

    if (props.store.todos.length === 1 - 1) {
      setYapilacak("Todo List is Empty");
    } else {
      setYapilacak("");
    }
  });

  const [yapildi, setYapildi] = useState("");
  const [yapilacak, setYapilacak] = useState("");

  const f = () => {
    let text : any = document.getElementById("d");

    text.value = " ";
  }

  return (
    <div className="content">
      <h1 className="count">{props.store.count()}</h1>
      <input
        id="d"
        type="text"
        value={props.store.todo}
        onChange={e => props.store.setTodo(e.target.value)}
        onKeyPress={(e: any) => {
          if (e.key === "Enter") {
            props.store.addTodo();
            f();
          }
        }}
      />
      <button className="btn-add" onClick={props.store.addTodo}>
        Add
      </button>
      <button className="btn-add" onClick={props.store.clear}>
        Clear All
      </button>
      <div className="store">
        <div className="items">
          <h1>TODO</h1>
          {props.store.todos.map((index, key) => {
            return (
              <div className="item" key={key}>
                <li className="todos">{index}</li>
                <button
                  className="btn-delete"
                  onClick={e => {
                    props.store.deleteItems(index);
                  }}
                >
                  Done
                </button>
              </div>
            );
          })}
          <h1 className="title3">{yapilacak}</h1>
        </div>
        <div className="items">
          <h1>DONE</h1>

          {props.store.yapilanlar.map((index, key) => {
            return (
              <div className="item" key={key}>
                <li className="todosYapildi">{index}</li>
                <button
                  className="btn-delete"
                  onClick={e => {
                    props.store.geriGonder(index);
                  }}
                >
                  Add todo
                </button>

                <button
                  className="btn-delete"
                  onClick={e => {
                    props.store.deleteItems2(index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <h1 className="title3">{yapildi}</h1>
        </div>
      </div>
    </div>
  );
});

export default TodoList;
