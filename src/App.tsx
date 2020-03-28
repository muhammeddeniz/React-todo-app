import React from "react";
import Todo from "./components/todos";
import { TodoStore } from "./store/store";
import { observer } from "mobx-react";
import "./styles/list.scss";


const App: React.FC<{ Data: TodoStore }> = observer(
  (props): JSX.Element => {
    return (
      <div>
        <div className="App">
          <a href="#">
            <h1 className="title">Todo App</h1>
          </a>

          <Todo Data={props.Data} />
        </div>
      </div>
    );
  }
);

export default App;
