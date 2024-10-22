import React, { useContext } from 'react';
import { PiMoon, PiMoonFill } from "react-icons/pi";
import { TodoContext } from '../context/TodoContext';
// PiMoonFill
// PiMoon

export default function DarkMode() {
    const { isDarkMode, setDarkMode } = useContext(TodoContext);
    

    const onClickHandler = (e) => {
        e.preventDefault();
        
        setDarkMode(e.target.className === 'darkMode' ? 'N' : 'Y' );
    };

    return (
        <p className={isDarkMode === 'Y' ? 'darkMode' : 'un-darkMode'} onClick={e => onClickHandler(e)}>
            {isDarkMode === 'Y' ? <PiMoon /> : <PiMoonFill />}
        </p>
    );
}

