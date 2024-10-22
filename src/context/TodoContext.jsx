import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/use-LocalStorage";

export const TodoContext = createContext();

const [ALL, REMAINED, COMPLETED] = [{
    func: 'ALL',
    title: 'All',
}, {
    func: 'REMAINED',
    title: 'Active',
}, {
    func: 'COMPLETED',
    title: 'Completed',
}];
const menus = [ALL, REMAINED, COMPLETED];


export default function TodoProvider({children}) {
    const [isDarkMode, setDarkMode] = useState('Y');

    // todo, filter (current selected theme) 값을 일원화 하기 위해서
    const [addTodo, removeTodo, changeStateOfTodo, todos] = useLocalStorage();
    
    // todos show up depended on menu
    const [showUpTodos, setShowUpTodos] = useState([]);
    
    // menu user choose
    const [currentMenu, setCurrentMenu] = useState(ALL);
    
    // filtering process
    useEffect(() => {
        // pick todos related to current menu
        let yn = '';
        if (currentMenu?.func === REMAINED.func) {
            yn = 'N';
        } else if (currentMenu?.func === COMPLETED.func) {
            yn = 'Y';
        }

        const todosToBeExposed = todos.filter((todo) => {
            if (yn != '') {
                return yn === todo.completeYn;
            }

            return true;
        });

        setShowUpTodos(todosToBeExposed);
    }, [todos, currentMenu]);

    return (
        <TodoContext.Provider value={{ addTodo, 
            removeTodo,
            changeStateOfTodo,
            showUpTodos, //todos,
            menus,
            currentMenu,
            setCurrentMenu,
            isDarkMode,
            setDarkMode }} >{children}</TodoContext.Provider>
    );

}