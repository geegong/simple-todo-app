import React, { useContext, useState } from 'react';
import MenuButton from './menuButton';
import { TodoContext } from '../context/TodoContext';

export default function Menus() {
    const { menus, currentMenu, setCurrentMenu, isDarkMode } = useContext(TodoContext);

    return (
        <>
            {
                menus.map((element) => {
                    const isCurrent = currentMenu?.func === element?.func;
                        return <MenuButton key = {element.title} 
                        filter={element}
                        isClicked={isCurrent}
                        clickEvent={setCurrentMenu}
                        isDarkMode={isDarkMode}
                        />
                    }
                )
            }
        </>
    );
}

