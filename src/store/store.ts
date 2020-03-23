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
    count = () =>  {
        return this.todos.length;
    };

    @action 
    getTodo = () => {
        return this.todos;
    }

    @action 
    addTodo = () => {
        this.todos.push(this.todo);
    }
}
