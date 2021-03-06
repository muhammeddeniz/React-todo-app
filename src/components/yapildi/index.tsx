import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../../store/store";

interface DataStore {
  store: TodoStore;
  props: string;
}
const Done: React.FC<{ Data: TodoStore }> = observer(props => {
  useEffect(() => {
    console.log("props.store.todo");
    console.log(props.Data.yapilanlar);

    if (props.Data.yapilanlar.length === 1 - 1) {
      setYapildi("Yapıldı Listesi Boş!");
    } else {
      setYapildi("");
    }
  });

  const [yapildi, setYapildi] = useState("");

  return (
    <div className="items">
    <h1>BİTTİ</h1>
    {props.Data.yapilanlar.map((index, key) => {
      return (
        <div className="item" key={key}>
          <li className="todosYapildi">{index}</li>
   
          <button
            className="btn-delete"
            onClick={e => {
              props.Data.deleteItems2(index);
            }}
          >
            Sil
          </button>
        </div>
      );
    })}
    <h1 className="title3">{yapildi}</h1>
  </div>
  );
});

export default Done;
