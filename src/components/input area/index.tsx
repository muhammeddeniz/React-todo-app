import React from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../../store/store";

interface DataStore {
  store: TodoStore;
  props: string;
}
const InputArea: React.FC<{ Data: TodoStore }> = observer(props => {

  return (
    <div >
      <h1 className="count">{props.Data.count()}</h1>
      <input
        id="d"
        type="text"
        value={props.Data.todo}
        onChange={e => props.Data.setTodo(e.target.value)}
        onKeyPress={(e: any) => {
          if (e.key === "Enter") {
            props.Data.addTodo();
            props.Data.todo = " ";
          }
        }}
      />
      <button
        className="btn-add"
        onClick={e => {
          props.Data.addTodo();
          props.Data.todo = " ";
        }}
      >
      Ekle        
      </button>
      <button className="btn-add" 
      onClick={props.Data.clear}>
        Hepsini Temizle
      </button>
    </div>
  );
});

export default InputArea;
