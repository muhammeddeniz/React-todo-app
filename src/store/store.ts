import { observable, action } from "mobx";

export class TodoStore {
  @observable
  todos: [string | never] = ["muhammed"];

  @observable
  yapilanlar: [string | never] = ["ilk yapilan"];

  @observable
  todo: string = "";

  @action
  setTodo = (newTodo: string) => {
    this.todo = newTodo;
  };

  @action
  count = () => {
    return this.todos.length;
  };

  @action
  getTodo = () => {
    return this.todos;
  };

  @action
  addTodo = () => {
    this.todos.push(this.todo);
  };

  @action
  deleteItems = (item: string) => {
    const de = this.todos.indexOf(item);
    this.yapilanlar.push(item);
    this.todos.splice(de, 1);
  };

  @action
  deleteItems2 = (item: string) => {
    const de = this.todos.indexOf(item);
    this.yapilanlar.splice(de, 1);
  };

  @action
  geriGonder =  (item: string) => {
  
     this.yapilanlar.splice(this.yapilanlar.indexOf(item), 1);
     this.todos.push(item);
  };

  @action
  clear = () => {
    this.todos.splice(0, this.todos.length);
    this.yapilanlar.splice(0, this.yapilanlar.length);
  };
}
