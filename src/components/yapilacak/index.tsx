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
      setYapilacak("Yapılacak Listesi Boş!");
    } else {
      setYapilacak("");
    }
  }, [props.Iprops.yapilanlar, props.Iprops.todos.length]);

  const [yapilacak, setYapilacak] = useState("");

  return (
    
        <div className="items">
          <h1>YAPILACAK</h1>
          {props.Iprops.todos.map((index: string, key: number) => {
            return (
              <div className="item" key={key}>
                <li className="todos">{index}</li>
                <button
                  className="btn-delete"
                  onClick={e => {
                    props.Iprops.yapilacakEkle(index);
                  }}
                >
                  Yapılıyor  
                </button> 
              
              </div>
            );
          })}
          <h1 className="title3">{yapilacak}</h1>
        </div>
        
        
  );
});

export default TodoList;
