import React, { useEffect, useState, useContext } from 'react';
import { PiTrashBold } from "react-icons/pi";
import { TODO_STATE_COMPLETE, TODO_STATE_NOT_COMPLETE } from '../hooks/use-LocalStorage';
import { TodoContext } from '../context/TodoContext';

export default function Card() {
    const { removeTodo, changeStateOfTodo, showUpTodos } = useContext(TodoContext);
    const checkHandler = (element, event) => {
        // event.preventDefault();
        const checked = event.target.checked;
        // checked 상태 확인
        console.log('checked : ' + checked);

        changeStateOfTodo(element, checked ? TODO_STATE_COMPLETE : TODO_STATE_NOT_COMPLETE);        
    }

    const todoContentClass = (element) => {
        return element?.completeYn === 'Y' ? 'todo checked' : 'todo';
    }
    
    const isChecked = (element) => {
        return element?.completeYn === 'Y';
    }

    return (
        <>  
            {
                showUpTodos.map((element) => {
                    return <div key={element.id} className='card'>
                        <input className='check-todo' type="checkbox" checked={isChecked(element)} onChange={e => checkHandler(element, e)}/>
                            <p className={todoContentClass(element)}> {element.content}</p><button className='trash-todo' onClick={() => removeTodo(`${element.id}`)}><PiTrashBold /></button>
                            </div>
                })
            }
            
        </>
    );
}

