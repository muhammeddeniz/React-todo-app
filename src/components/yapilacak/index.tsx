import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../../store/store";

interface IProps {
    store?: any;
    props?: string;
}

const TodoList: React.FC<{Iprops: TodoStore}> = observer(props => {
  useEffect(() => {
    console.log("props.store.todo");
    console.log(props.Iprops.yapilanlar);

    if (props.Iprops.todos.length === 1 - 1) {
      setYapilacak("Todo List is Empty");
    } else {
      setYapilacak("");
    }
  }, [props.Iprops.yapilanlar, props.Iprops.todos.length]);

  const [yapilacak, setYapilacak] = useState("");

  return (
    
        <div className="items">
          <h1>TODO</h1>
          {props.Iprops.todos.map((index: string, key: number) => {
            return (
              <div className="item" key={key}>
                <li className="todos">{index}</li>
                <button
                  className="btn-delete"
                  onClick={e => {
                    props.Iprops.deleteItems(index);
                  }}
                >
                  Done
                </button>
              </div>
            );
          })}
          <h1 className="title3">{yapilacak}</h1>
        </div>
        
        
  );
});

export default TodoList;
