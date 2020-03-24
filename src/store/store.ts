import { observable, action } from 'mobx';

export class TodoStore {
    @observable 
    todos : [string] = ["muhammed"]

    @observable
    todo : string = "";

    @action
    setTodo = (newTodo : string) => {
        this.todo = newTodo;
    }

    @action
    count = () : any =>  {
        return this.todos.length;
    };

    @action 
    getTodo = () : any => {
        return this.todos;
    }

    @action 
    addTodo = () : void => {
        this.todos.push(this.todo);
    }

    @action 
    deleteItems = (item : string) : void => {
        const de = this.todos.indexOf(item);
        this.todos.splice(de, 1);
    }
}
