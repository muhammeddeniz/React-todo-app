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

    if (props.Iprops.yapiliyor.length === 1 - 1) {
      setYapilacak("Yapiliyor Listesi Boş!");
    } else {
      setYapilacak("");
    }
  }, [props.Iprops.yapilanlar, props.Iprops.yapiliyor.length]);

  const [yapilacak, setYapilacak] = useState("");

  return (
    
        <div className="items">
          <h1>YAPILIYOR</h1>
          {props.Iprops.yapiliyor.map((index: string, key: number) => {
            return (
              <div className="item" key={key}>
                <li className="todos">{index}</li>
                <button
                  className="btn-delete"
                  onClick={e => {
                    props.Iprops.yapiliyorEkle(index);
                  }}
                >
                  Yapilmadi
                </button>
                <button
                  className="btn-delete"
                  onClick={e => {
                    props.Iprops.yapildiEkle(index);
                  }}
                >
                  Yapildi
                </button>
              </div>
            );
          })}
          <h1 className="title3">{yapilacak}</h1>
        </div>
        
        
  );
});

export default TodoList;
