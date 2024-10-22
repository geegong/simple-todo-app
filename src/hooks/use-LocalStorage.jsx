import { useCallback, useEffect, useState } from "react";

// 굳이 프리픽스가 필요할까 싶다..🧐
export const TODO_LIST_ID_IN_STORAGE = 'TODOS';
export const TODO_STATE_COMPLETE = 'COMPLETE';
export const TODO_STATE_NOT_COMPLETE = 'NOT_COMPLETE';

/**
 * [{}, {}, {}, ...]
 * {} ->
 * {
 *  id: 20241020000001,
 *  content : 'working out every morning'
 *  compleYn : 'Y' (or 'N')
 * },
 * {
 *  id: 20241020000001,
 *  content : 'keeping inner peace every day'
 *  completeYn : 'N'
 * }
 * ...
 */

const generateIdSuffixBasedOnToday = () => {
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = String(today.getMonth() + 1).padStart(2, '0');
    // const day = String(today.getDate()).padStart(2, '0');

    // return `${year}${month}${day}`;

    return new Date().getTime();
}

const getAllTodoListObjects = (defaultIfNull) => {
    const objectStr = window.localStorage.getItem(TODO_LIST_ID_IN_STORAGE);
    return objectStr ? JSON.parse(objectStr) : defaultIfNull;
}

const getAllTodos = () => {
    const allTodos = getAllTodoListObjects([]);

    return allTodos ? allTodos.map((todo) => {
        return {
            id : todo.id,
            todo : todo.content,
            state : todo.completeYn === 'Y' ? 'COMPLETE' : 'ACTIVE'
        };
    }) : [];
};



/**
 * reuse the logic not reuse values.
 * @returns 
 */
export default function useLocalStorage() {
    const [todos, setLocalStateTodos] = useState([]);

    useEffect(() => {
        // initialize todos
        setLocalStateTodos(getAllTodoListObjects([]));
    }, []);

    const addTodo = useCallback((todo) => {
        
        // all ids manage
        const allTodos = getAllTodoListObjects([]);

        const tobePushed = {
            id : generateIdSuffixBasedOnToday(),
            content: todo,
            completeYn: 'N'
        }

        allTodos.push(tobePushed);
        window.localStorage.setItem(TODO_LIST_ID_IN_STORAGE, JSON.stringify(allTodos));
        setLocalStateTodos(allTodos);
        
    }, []);


    const removeTodo = useCallback((id) => {
        const allTodos = getAllTodoListObjects([]);
        const spliceIndex = allTodos.findIndex((element) => {
            return element.id == id;
        });

        

        allTodos.splice(spliceIndex, 1);

        setLocalStateTodos(allTodos);
        window.localStorage.setItem(TODO_LIST_ID_IN_STORAGE, JSON.stringify(allTodos));
    }, []);

    // change state of todos 
    const changeStateOfTodo = useCallback((todoObject, toState) => {
        
        let copied = getAllTodoListObjects([]);
        // change the state
        copied.forEach((todo) => {
            if (todo.id === todoObject.id) {
                todo.completeYn = (toState === TODO_STATE_COMPLETE) ? 'Y' : 'N';
            }
        });

        setLocalStateTodos(copied);
        window.localStorage.setItem(TODO_LIST_ID_IN_STORAGE, JSON.stringify(copied));

    }, []);

    return [addTodo, removeTodo, changeStateOfTodo, todos];
}

