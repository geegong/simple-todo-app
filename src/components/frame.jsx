import React, { useContext } from 'react';
import DarkMode from './darkMode';
import Filters from './menus';
import Card from './card';
import AddTodo from './addTodo';
import FilterProvider from '../context/FilterContext';
import TodoProvider, { TodoContext } from '../context/TodoContext';

export default function Frame() {
    const { isDarkMode, setDarkMode } = useContext(TodoContext);
    
    return (
        
        <div className={isDarkMode === 'Y' ? 'frame' : 'day-frame'}>
            <div className={isDarkMode === 'Y' ? 'top-buttons' : 'day-top-buttons'}>
                <DarkMode />
                <Filters />
            </div>
            <div className='cards'>
                <Card />
            </div>
            <div className='add-todo'>
                <AddTodo />
            </div>
            
        </div>
        
    );
}

