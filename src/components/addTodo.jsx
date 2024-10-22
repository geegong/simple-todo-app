import React, { useCallback, useContext, useState } from 'react';
import TodoProvider, { TodoContext } from '../context/TodoContext';

export default function AddTodo() {
    const { addTodo } = useContext(TodoContext);
    const [todoInput, setTodoInput] = useState('');

    const addTodoEventHandler = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        addTodo(formJson.todoInput);
        // clear input
        setTodoInput('');
    };

    const changeTodoInput = (e) => {
        setTodoInput(e.target.value);
    }

    return (
        <>
            <form method="get" onSubmit={addTodoEventHandler} >
                <input name='todoInput' className='add-todo-input' placeholder='Add Todo!' value={todoInput} onChange={changeTodoInput}></input>
                <button className='add-todo-button' >Add</button>
            </form>
        </>
    );
}

