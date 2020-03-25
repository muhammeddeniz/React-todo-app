import { observable, action } from 'mobx';

export class TodoStore {
    @observable 
    todos : [string] = ["muhammed"];

     @observable
     yapilanlar : [string] = ["ilk yapilan"] ;

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
        this.yapilanlar.push(item);
    }


    @action 
    deleteItems2 = (item : string) : void => {
        const de = this.todos.indexOf(item);
        this.yapilanlar.splice(de, 1);
    }

    @action 
    geriGonder = (item: string) : void => {
        const de = this.todos.indexOf(item);
        this.yapilanlar.splice(de, 1);
        this.todos.push(item);
    }
}
