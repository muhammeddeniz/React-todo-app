import React, {useState, useEffect} from 'react';
import { observer } from 'mobx-react';
import {TodoStore} from '../store/store';

const TodoList : React.FC<{store: TodoStore}> = observer((props) => {

    useEffect(() => {
        console.log(props.store.todo);
        
    });

    return (
        <div>
            <input type="text"
            value={props.store.todo}
            onChange={e => props.store.setTodo(e.target.value)}
            />
             <button
            onClick={props.store.addTodo}
            >
                Ekle
            </button>
           
            {props.store.todos.map(index => {
                return(
                    <li>
                         {index}
                    </li>
                )
            })}

          

        </div>
    )
})

export default TodoList;
